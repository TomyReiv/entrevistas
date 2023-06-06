function mostFrequentWords(text) {
    // Remover caracteres especiales y convertir a minúsculas
    const cleanedText = text.replace(/[^\w']/g, ' ').toLowerCase();
  
    // Crear un objeto para contar las palabras
    const wordCount = {};
  
    // Dividir el texto en palabras
    const words = cleanedText.split(' ');
  
    // Contar las apariciones de cada palabra
    for (const word of words) {
      if (word !== '') {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    }
  
    // Obtener las palabras más frecuentes
    const frequentWords = Object.keys(wordCount)
      .sort((a, b) => wordCount[b] - wordCount[a])
      .slice(0, 3);
  
    return frequentWords;
  }
  