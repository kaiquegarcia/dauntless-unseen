;(function(w) {
    const alphabet = {
        "ㅏ": "A",
        "Б": "B",
        "C": "C",
        "𑀘": "C",
        //'\uD804\uDC18': "C",
        "Δ": "D",
        "Э": "E",
        "Ф": "F",
        "Γ": "G",
        "ㅎ": "H",
        "И": "I",
        "ㅈ": "J",
        "𑀛": "J",
        //'\uD804\uDC1B': "J",
        "ㅋ": "K",
        "Λ": "L",
        "ㅁ": "M",
        "N": "N",
        "𑀦": "N",
        //'\uD804\uDC26': "N",
        "Ω": "O",
        "Π": "P",
        "Q": "Q",
        "ㄹ": "R",
        "Σ": "S",
        "T": "T",
        "U": "U",
        "V": "V",
        "W": "W",
        "X": "X",
        "Y": "Y",
        "З": "Z",
    };
    const decodedLetters = Object.values(alphabet);
    const encodedLetters = Object.keys(alphabet);
    
    const encode = (phrase) => {
        const words = phrase.toUpperCase().split(' ');
        let encodedWords = [];
        for (const word of words) {
            let encodedWord = '', previousUnicode = '';
            for (let index = 0; index < word.length; index++) {
                let letter = word.charAt(index);

                if (!letter.isWellFormed()) {
                    if (!previousUnicode) {
                        previousUnicode = letter;
                        continue;
                    }

                    letter = previousUnicode + letter;
                }

                const letterIndex = decodedLetters.indexOf(letter);
                encodedWord += letterIndex >= 0
                    ? encodedLetters[letterIndex]
                    : letter;
                previousUnicode = '';
            }

            encodedWords.push(encodedWord);
        }

        return encodedWords.join('   ');
    };

    const decode = (phrase) => {
        const words = phrase.split(' ');
        let decodedWords = [];
        for (const word of words) {
            let decodedWord = '', previousUnicode = '';
            for (let index = 0; index < word.length; index++) {
                let letter = word.charAt(index);
                if (!letter.isWellFormed()) {
                    if (!previousUnicode) {
                        previousUnicode = letter;
                        continue;
                    }

                    letter = previousUnicode + letter;
                }

                decodedWord += typeof(alphabet[letter]) !== 'undefined'
                    ? alphabet[letter]
                    : letter;
                previousUnicode = '';
            }

            decodedWords.push(decodedWord);
        }

        return decodedWords.join(' ');
    };

    w.Unseen = {
        encode,
        decode
    };
})(window);