document.addEventListener("DOMContentLoaded", function () {
    const alphabetDiv = document.getElementById('alphabet');
    const infoDiv = document.getElementById('info');
    const showAlphabetBtn = document.getElementById('showAlphabet');
    const alphabetPopup = document.getElementById('alphabetPopup');
    const closeBtn = document.getElementsByClassName('close')[0];
    const inputField = document.getElementById('inputField');
    const clearInput = document.getElementById('clearInput');

    const germanAlphabet = [
        { letter: 'A', word: 'Anton' },
        { letter: 'B', word: 'Berta' },
        { letter: 'C', word: 'Cäsar' },
        { letter: 'D', word: 'Dora' },
        { letter: 'E', word: 'Emil' },
        { letter: 'F', word: 'Friedrich' },
        { letter: 'G', word: 'Gustav' },
        { letter: 'H', word: 'Heinrich' },
        { letter: 'I', word: 'Ida' },
        { letter: 'J', word: 'Julius' },
        { letter: 'K', word: 'Kaufmann' },
        { letter: 'L', word: 'Ludwig' },
        { letter: 'M', word: 'Martha' },
        { letter: 'N', word: 'Nordpol' },
        { letter: 'O', word: 'Otto' },
        { letter: 'P', word: 'Paula' },
        { letter: 'Q', word: 'Quelle' },
        { letter: 'R', word: 'Richard' },
        { letter: 'S', word: 'Samuel' },
        { letter: 'T', word: 'Theodor' },
        { letter: 'U', word: 'Ulrich' },
        { letter: 'V', word: 'Viktor' },
        { letter: 'W', word: 'Wilhelm' },
        { letter: 'X', word: 'Xanthippe' },
        { letter: 'Y', word: 'Ypsilon' },
        { letter: 'Z', word: 'Zacharias' },
    ];

    const natoAlphabet = [
        { letter: 'A', word: 'Alpha' },
        { letter: 'B', word: 'Bravo' },
        { letter: 'C', word: 'Charlie' },
        { letter: 'D', word: 'Delta' },
        { letter: 'E', word: 'Echo' },
        { letter: 'F', word: 'Foxtrot' },
        { letter: 'G', word: 'Golf' },
        { letter: 'H', word: 'Hotel' },
        { letter: 'I', word: 'India' },
        { letter: 'J', word: 'Juliet' },
        { letter: 'K', word: 'Kilo' },
        { letter: 'L', word: 'Lima' },
        { letter: 'M', word: 'Mike' },
        { letter: 'N', word: 'November' },
        { letter: 'O', word: 'Oscar' },
        { letter: 'P', word: 'Papa' },
        { letter: 'Q', word: 'Quebec' },
        { letter: 'R', word: 'Romeo' },
        { letter: 'S', word: 'Sierra' },
        { letter: 'T', word: 'Tango' },
        { letter: 'U', word: 'Uniform' },
        { letter: 'V', word: 'Victor' },
        { letter: 'W', word: 'Whiskey' },
        { letter: 'X', word: 'X-ray' },
        { letter: 'Y', word: 'Yankee' },
        { letter: 'Z', word: 'Zulu' },
    ];

    const numbers = {
        '0': { word: 'Null', nato: 'Zero' },
        '1': { word: 'Eins', nato: 'One' },
        '2': { word: 'Zwei', nato: 'Two' },
        '3': { word: 'Drei', nato: 'Three' },
        '4': { word: 'Vier', nato: 'Four' },
        '5': { word: 'Fünf', nato: 'Five' },
        '6': { word: 'Sechs', nato: 'Six' },
        '7': { word: 'Sieben', nato: 'Seven' },
        '8': { word: 'Acht', nato: 'Eight' },
        '9': { word: 'Neun', nato: 'Nine' }
    };

    const createAlphabet = () => {
        alphabetDiv.innerHTML = '';
        germanAlphabet.forEach(item => {
            const letterDiv = document.createElement('div');
            letterDiv.textContent = item.letter;
            letterDiv.addEventListener('click', () => showInfo(item.letter));
            alphabetDiv.appendChild(letterDiv);
        });
    };

    const showInfo = (letter) => {
        const germanEntry = germanAlphabet.find(item => item.letter === letter);
        const natoEntry = natoAlphabet.find(item => item.letter === letter);
        infoDiv.classList.remove('show');
        infoDiv.classList.add('fade');
        infoDiv.innerHTML = `
            <p><strong>Deutsch:</strong> ${germanEntry.word}</p>
            <p><strong>NATO:</strong> ${natoEntry.word}</p>
        `;
        setTimeout(() => {
            infoDiv.classList.remove('fade');
            infoDiv.classList.add('show');
        }, 10); // Verzögerung, um die Klasse "fade" anzuwenden
    };

    const translateText = (text) => {
        let germanTranslation = '';
        let natoTranslation = '';

        for (let char of text.toUpperCase()) {
            if (char >= 'A' && char <= 'Z') {
                const germanEntry = germanAlphabet.find(item => item.letter === char);
                const natoEntry = natoAlphabet.find(item => item.letter === char);
                germanTranslation += `${germanEntry.word} `;
                natoTranslation += `${natoEntry.word} `;
            } else if (char >= '0' && char <= '9') {
                germanTranslation += `${numbers[char].word} `;
                natoTranslation += `${numbers[char].nato} `;
            }
        }

        infoDiv.innerHTML = `
            <p><strong>Deutsch:</strong> ${germanTranslation.trim()}</p>
            <p><strong>NATO:</strong> ${natoTranslation.trim()}</p>
        `;
        infoDiv.classList.add('show');
    };

    inputField.addEventListener('input', (event) => {
        const text = event.target.value;
        translateText(text);
    });

    clearInput.addEventListener('click', () => {
        inputField.value = '';
        infoDiv.innerHTML = '';
    });

    showAlphabetBtn.addEventListener('click', () => {
        const germanList = document.getElementById('germanAlphabet');
        const natoList = document.getElementById('natoAlphabet');

        germanList.innerHTML = '';
        natoList.innerHTML = '';

        germanAlphabet.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<span class="letter">${item.letter}</span> ${item.word}`;
            germanList.appendChild(div);
        });

        natoAlphabet.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<span class="letter">${item.letter}</span> ${item.word}`;
            natoList.appendChild(div);
        });

        alphabetPopup.style.display = 'block';
        setTimeout(() => {
            alphabetPopup.classList.add('show');
        }, 10);
    });

    const closePopup = () => {
        alphabetPopup.classList.remove('show');
        setTimeout(() => {
            alphabetPopup.style.display = 'none';
        }, 500); // Dauer der Transition
    };

    closeBtn.addEventListener('click', closePopup);

    window.addEventListener('click', (event) => {
        if (event.target == alphabetPopup) {
            closePopup();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closePopup();
            inputField.value = '';
            infoDiv.innerHTML = '';
        } else {
            const letter = event.key.toUpperCase();
            if (germanAlphabet.find(item => item.letter === letter)) {
                showInfo(letter);
            }
        }
    });

    createAlphabet();
});
