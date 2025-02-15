function highlightLongWords() {
    const paragraph = document.getElementById('myParagraph');
    const words = paragraph.innerText.split(' ');

    const highlightedWords = words.map(word => {
        // Check if word length is greater than 8 characters
        if (word.length > 8) {
            // Wrap the word with a span that has a highlight class
            return `<span class="highlight">${word}</span>`;
        } else {
            return word;
        }
    });

    // Join the words back and set the innerHTML of the paragraph
    paragraph.innerHTML = highlightedWords.join(' ');
}

// Call the function to highlight long words
highlightLongWords();