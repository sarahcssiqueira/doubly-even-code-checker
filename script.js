function isDoublyEven(str) {
  const ones = str.split('').filter(b => b === '1').length;
  return ones % 4 === 0;
}

function addParityBits(bits) {
  const onesCount = bits.split('').filter(b => b === '1').length;
  const needed = (4 - (onesCount % 4)) % 4;
  return {
    fixed: bits + '1'.repeat(needed),
    parityBits: needed
  };
}

function bitSpan(bit, cls = "") {
  return `<span class="bit ${cls}">${bit}</span>`;
}

function check() {
  const input = document.getElementById('input').value.trim();
  const result = document.getElementById('result');

  if (!/^[01]+$/.test(input)) {
    result.innerHTML = `<p class="invalid">⚠️ Only 0 and 1 allowed.</p>`;
    return;
  }

  const { fixed, parityBits } = addParityBits(input);
  const valid = isDoublyEven(fixed);

  const bitDisplay = fixed
    .split('')
    .map((bit, i) => {
      const cls = i < input.length ? 'original' : 'parity';
      return bitSpan(bit, cls);
    })
    .join('');

  result.innerHTML = `
    <p>Original: <code>${input}</code></p>
    <p>With parity: <code>${fixed}</code></p>
    <div class="bit-grid">${bitDisplay}</div>
    <p class="${valid ? 'valid' : 'invalid'}">
      ${valid ? '✅ Doubly-even (valid)' : '❌ Not doubly-even'}
    </p>
    ${parityBits > 0 ? `<p><small>(${parityBits} parity bit${parityBits > 1 ? 's' : ''} added)</small></p>` : ''}
  `;
}
