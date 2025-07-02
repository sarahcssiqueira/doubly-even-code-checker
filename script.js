function isDoublyEven(str) {
  const ones = str.split('').filter(b => b === '1').length;
  return ones % 4 === 0;
}

function addParityBits(bits) {
  const onesCount = bits.split('').filter(b => b === '1').length;
  const needed = (4 - (onesCount % 4)) % 4;
  return bits + '1'.repeat(needed);
}

function check() {
  const input = document.getElementById('input').value.trim();
  const result = document.getElementById('result');

  if (!/^[01]+$/.test(input)) {
    result.innerHTML = `<p class="invalid">⚠️ Only 0 and 1 allowed.</p>`;
    return;
  }

  const fixed = addParityBits(input);
  const valid = isDoublyEven(fixed);

  result.innerHTML = `
    <p>Original: <code>${input}</code></p>
    <p>With parity: <code>${fixed}</code></p>
    <p class="${valid ? 'valid' : 'invalid'}">
      ${valid ? '✅ Doubly-even (valid)' : '❌ Not doubly-even'}
    </p>
  `;
}
