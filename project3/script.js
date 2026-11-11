// String Operations - functions

// 1) Reverse string
function reverseString(input) {
  if (typeof input !== 'string') return '';
  return input.split('').reverse().join('');
}

// 2) Replace operations
// replace a single character: replace the first occurrence
function replaceFirst(input, target, replacement) {
  if (typeof input !== 'string') return '';
  if (typeof target !== 'string' || target.length === 0) return input;
  const idx = input.indexOf(target);
  if (idx === -1) return null; // signal character not found
  return input.substring(0, idx) + replacement + input.substring(idx + target.length);
}

// replace all occurrences
function replaceAll(input, target, replacement) {
  if (typeof input !== 'string') return '';
  if (typeof target !== 'string' || target.length === 0) return input;
  // Use split-join to replace all occurrences
  return input.split(target).join(replacement);
}

// 3) Palindrome check
function isPalindrome(input) {
  if (typeof input !== 'string') return false;
  // Normalize: remove non-alphanumeric and lowercase for palindrome check
  const normalized = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized.length > 0 && normalized === reversed;
}

// Utility: display helper (used by UI)
function displayResult(targetElId, text) {
  const el = document.getElementById(targetElId);
  if (el) el.textContent = text;
}

// Example wiring (to be connected in HTML with proper element IDs)
// - Reverse: input #revInput, button calls handleReverse, output in #revOutput
function handleReverse() {
  const input = document.getElementById('revInput')?.value ?? '';
  const result = reverseString(input);
  if (input.length === 0) {
    displayResult('revOutput', 'Please enter input');
  } else {
    displayResult('revOutput', `Output: ${result}`);
  }
}

// - Replace: input #repInput (string), target #repTarget, replacement #repReplacement
//           two outputs: #repOutputSingle and #repOutputAll
function handleReplaceSingle() {
  const input = document.getElementById('repInput')?.value ?? '';
  const target = document.getElementById('repTarget')?.value ?? '';
  const repl = document.getElementById('repReplacement')?.value ?? '';
  if (input.length === 0 || target.length === 0) {
    displayResult('repOutputSingle', 'Please enter input and target to replace');
    return;
  }
  const result = replaceFirst(input, target, repl);
  if (result === null) {
    displayResult('repOutputSingle', 'Character not found in string. Please enter input correctly.');
  } else {
    displayResult('repOutputSingle', `Output: ${result}`);
  }
}

function handleReplaceAll() {
  const input = document.getElementById('repInput')?.value ?? '';
  const target = document.getElementById('repTarget')?.value ?? '';
  const repl = document.getElementById('repReplacement')?.value ?? '';
  if (input.length === 0 || target.length === 0) {
    displayResult('repOutputAll', 'Please enter input and target to replace');
    return;
  }
  const result = replaceAll(input, target, repl);
  if (input.indexOf(target) === -1) {
    displayResult('repOutputAll', 'Character not found in string. Please enter input correctly.');
  } else {
    displayResult('repOutputAll', `Output: ${result}`);
  }
}

// - Palindrome: input #palInput, output #palOutput
function handlePalindrome() {
  const input = document.getElementById('palInput')?.value ?? '';
  if (input.length === 0) {
    displayResult('palOutput', 'Please enter input to check');
    return;
  }
  const result = isPalindrome(input);
  displayResult('palOutput', result ? 'Output: It is a palindrome' : 'Output: Not a palindrome');
}