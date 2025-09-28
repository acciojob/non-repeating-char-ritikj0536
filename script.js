function firstNonRepeatedChar(str) {
  let freq = {};

  // Step 1: count frequencies
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Step 2: find first non-repeated
  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null; // if all are repeated
}

// Do not change this part
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
