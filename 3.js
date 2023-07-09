function countLetterOccurrences(text) {
    const letterOccurrences = {};
  
    for (let i = 0; i < text.length; i++) {
      const letter = text[i].toLowerCase();
      if (/[a-z]/.test(letter)) {
        letterOccurrences[letter] = (letterOccurrences[letter] || 0) + 1;
      }
    }
  
    return letterOccurrences;
  }
  
  const text = "Hello, World!";
  const letterCount = countLetterOccurrences(text);
  console.log(letterCount);
  // Resultado esperado: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
  