// Check if the binary string is "doubly-even":
// This means the count of '1's is divisible by 4,
// a key property in certain error-correcting codes 
// that also appear in the mathematical structures of string theory.
function isDoublyEven(str) {
  const ones = str.split('').filter(b => b === '1').length;
  return ones % 4 === 0;
}

// Add the minimal number of '1' parity bits to the input string
// so that the total number of '1's becomes divisible by 4.
// This mimics the error-correcting "self-dual doubly-even" codes 
// that James Gates Jr. found embedded in supersymmetric physics equations.
// The parity bits represent the "correction" to enforce code validity.
function addParityBits(bits) {
  const onesCount = bits.split('').filter(b => b === '1').length;
  const needed = (4 - (onesCount % 4)) % 4;
  return {
    fixed: bits + '1'.repeat(needed),
    parityBits: needed
  };
}

// Wraps each bit in a <span> with a CSS class:
// distinguishes original bits from added parity bits visually.
// This reflects how physicists visualize structures like Adinkras,
// where distinct components have different roles but form a unified system.
function bitSpan(bit, cls = "") {
  return `<span class="bit ${cls}">${bit}</span>`;
}

// The main function simulates applying a correction to a binary sequence,
// similar to how the universe might "self-correct" at the quantum level.
// It validates input, applies parity bits to achieve the doubly-even property,
// and visually demonstrates the code structure and its mathematical property.
function check() {
  const input = document.getElementById('input').value.trim();
  const result = document.getElementById('result');

  // Ensure input is binary — this is analogous to discrete quantum states
  if (!/^[01]+$/.test(input)) {
    result.innerHTML = `<p class="invalid">⚠️ Only 0 and 1 allowed.</p>`;
    return;
  }

  // Add parity bits to enforce the doubly-even constraint
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
