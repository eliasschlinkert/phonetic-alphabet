<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const alphabetDiv   = document.getElementById('alphabet');
    const infoDiv       = document.getElementById('info');
    const showAlphabetBtn = document.getElementById('showAlphabet');
    const alphabetPopup = document.getElementById('alphabetPopup');
    const closeBtn      = document.querySelector('.close');
    const inputField    = document.getElementById('inputField');
    const clearInputBtn = document.getElementById('clearInput');

    // ── Data ────────────────────────────────────────────────────────────────

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
        '0': { de: 'Null',   nato: 'Zero'  },
        '1': { de: 'Eins',   nato: 'One'   },
        '2': { de: 'Zwei',   nato: 'Two'   },
        '3': { de: 'Drei',   nato: 'Three' },
        '4': { de: 'Vier',   nato: 'Four'  },
        '5': { de: 'Fünf',   nato: 'Five'  },
        '6': { de: 'Sechs',  nato: 'Six'   },
        '7': { de: 'Sieben', nato: 'Seven' },
        '8': { de: 'Acht',   nato: 'Eight' },
        '9': { de: 'Neun',   nato: 'Nine'  },
    };

    // symbol  = das echte Zeichen (für Lookup im Eingabetext)
    // display = was auf der Schaltfläche steht (· für Leerzeichen)
    const specialChars = [
        { symbol: ' ',  display: '·',  de: 'Leerzeichen',       en: 'Space'             },
        { symbol: ',',  display: ',',  de: 'Komma',             en: 'Comma'             },
        { symbol: '.',  display: '.',  de: 'Punkt',             en: 'Period'            },
        { symbol: ':',  display: ':',  de: 'Doppelpunkt',       en: 'Colon'             },
        { symbol: ';',  display: ';',  de: 'Semikolon',         en: 'Semicolon'         },
        { symbol: '-',  display: '-',  de: 'Bindestrich',       en: 'Hyphen'            },
        { symbol: '_',  display: '_',  de: 'Unterstrich',       en: 'Underscore'        },
        { symbol: '^',  display: '^',  de: 'Zirkumflex',        en: 'Caret'             },
        { symbol: '#',  display: '#',  de: 'Raute',             en: 'Hash'              },
        { symbol: '+',  display: '+',  de: 'Plus',              en: 'Plus'              },
        { symbol: '€',  display: '€',  de: 'Euro',              en: 'Euro'              },
        { symbol: '@',  display: '@',  de: 'At',                en: 'At sign'           },
        { symbol: '$',  display: '$',  de: 'Dollar',            en: 'Dollar'            },
        { symbol: '%',  display: '%',  de: 'Prozent',           en: 'Percent'           },
        { symbol: '&',  display: '&',  de: 'Und-Zeichen',       en: 'Ampersand'         },
        { symbol: '§',  display: '§',  de: 'Paragraf',          en: 'Section sign'      },
        { symbol: '"',  display: '"',  de: 'Anführungszeichen', en: 'Quotation mark'    },
        { symbol: '!',  display: '!',  de: 'Ausrufezeichen',    en: 'Exclamation mark'  },
        { symbol: '?',  display: '?',  de: 'Fragezeichen',      en: 'Question mark'     },
        { symbol: '(',  display: '(',  de: 'Klammer auf',       en: 'Open parenthesis'  },
        { symbol: ')',  display: ')',  de: 'Klammer zu',        en: 'Close parenthesis' },
        { symbol: '=',  display: '=',  de: 'Gleich',            en: 'Equals'            },
    ];

    // ── Lookup Maps: O(1) statt O(n) pro Zeichen ────────────────────────────

    const germanMap      = new Map(germanAlphabet.map(({ letter, word }) => [letter, word]));
    const natoMap        = new Map(natoAlphabet.map(({ letter, word }) => [letter, word]));
    const deNumberMap    = new Map(Object.entries(numbers).map(([k, v]) => [k, v.de]));
    const natoNumberMap  = new Map(Object.entries(numbers).map(([k, v]) => [k, v.nato]));
    const specialCharMap = new Map(specialChars.map(({ symbol, de, en }) => [symbol, { de, en }]));

    // ── Helpers ──────────────────────────────────────────────────────────────

    /** Erstellt ein <p>-Element mit fettem Label und Text-Inhalt. */
    function makeInfoRow(label, text) {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = label;
        p.appendChild(strong);
        p.append(' ' + text);
        return p;
    }

    /** Zeigt die Info-Box mit Fade-Animation an. */
    function showInfoBox(deText, natoText) {
        infoDiv.innerHTML = '';
        infoDiv.classList.remove('show');
        infoDiv.appendChild(makeInfoRow('Deutsch:', deText));
        infoDiv.appendChild(makeInfoRow('NATO:', natoText));
        // Doppeltes requestAnimationFrame stellt sicher, dass der Browser
        // den class-Remove tatsächlich rendert, bevor show gesetzt wird.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => infoDiv.classList.add('show'));
        });
    }

    function clearInfoBox() {
        infoDiv.innerHTML = '';
        infoDiv.classList.remove('show');
    }

    // ── Alphabet-Grid aufbauen ───────────────────────────────────────────────

    const gridFragment = document.createDocumentFragment();
    germanAlphabet.forEach(({ letter }) => {
        const div = document.createElement('div');
        div.textContent = letter;
        div.addEventListener('click', () => showLetterInfo(letter));
        gridFragment.appendChild(div);
    });
    alphabetDiv.appendChild(gridFragment);

    // ── Sonderzeichen-Grid aufbauen ──────────────────────────────────────────

    const specialCharsDiv = document.createElement('div');
    specialCharsDiv.className = 'special-chars';
    const specialFragment = document.createDocumentFragment();
    specialChars.forEach(({ symbol, display }) => {
        const div = document.createElement('div');
        div.textContent = display;
        div.addEventListener('click', () => showSpecialCharInfo(symbol));
        specialFragment.appendChild(div);
    });
    specialCharsDiv.appendChild(specialFragment);
    // Nach dem Alphabet-Grid einfügen
    alphabetDiv.insertAdjacentElement('afterend', specialCharsDiv);

    // ── Popup-Inhalt einmalig aufbauen ───────────────────────────────────────

    const germanList = document.getElementById('germanAlphabet');
    const natoList   = document.getElementById('natoAlphabet');

    function buildAlphabetList(container, data) {
        const fragment = document.createDocumentFragment();
        data.forEach(({ letter, word }) => {
            const div  = document.createElement('div');
            const span = document.createElement('span');
            span.className   = 'letter';
            span.textContent = letter;
            div.appendChild(span);
            div.append(' ' + word);
            fragment.appendChild(div);
        });
        container.appendChild(fragment);
    }

    buildAlphabetList(germanList, germanAlphabet);
    buildAlphabetList(natoList,   natoAlphabet);

    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        // Bildschirmtastatur unterdrücken
        inputField.setAttribute('inputmode', 'none');

        // Herz: Tap togglet .expanded, Tap außerhalb schließt wieder
        const creditEl   = document.querySelector('.credit');
        const heartEl    = document.querySelector('.credit-heart');

        heartEl.addEventListener('click', (e) => {
            e.stopPropagation(); // verhindert sofortiges Schließen durch document-Listener
            creditEl.classList.toggle('expanded');
        });

        document.addEventListener('click', () => {
            creditEl.classList.remove('expanded');
        });
    } else {
        inputField.focus();
    }

    // ── Popup öffnen / schließen ─────────────────────────────────────────────

    function openPopup() {
        alphabetPopup.classList.add('open');
        alphabetPopup.setAttribute('aria-hidden', 'false');
    }

    function closePopup() {
        alphabetPopup.classList.remove('open');
        alphabetPopup.setAttribute('aria-hidden', 'true');
    }

    showAlphabetBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);

    alphabetPopup.addEventListener('click', (e) => {
        if (e.target === alphabetPopup) closePopup();
    });

    // ── Einzelnen Buchstaben / Sonderzeichen anzeigen ────────────────────────

    function showLetterInfo(letter) {
        const de   = germanMap.get(letter);
        const nato = natoMap.get(letter);
        if (!de || !nato) return;
        showInfoBox(de, nato);
    }

    function showSpecialCharInfo(symbol) {
        const entry = specialCharMap.get(symbol);
        if (!entry) return;
        showInfoBox(entry.de, entry.en);
    }

    // ── Text übersetzen ──────────────────────────────────────────────────────

    function translateText(text) {
        const deParts   = [];
        const natoParts = [];

        for (const char of text) {
            const upper = char.toUpperCase();
            if (germanMap.has(upper)) {
                deParts.push(germanMap.get(upper));
                natoParts.push(natoMap.get(upper));
            } else if (deNumberMap.has(char)) {
                deParts.push(deNumberMap.get(char));
                natoParts.push(natoNumberMap.get(char));
            } else if (specialCharMap.has(char)) {
                const entry = specialCharMap.get(char);
                deParts.push(entry.de);
                natoParts.push(entry.en);
            }
        }

        if (deParts.length === 0) {
            clearInfoBox();
            return;
        }

        showInfoBox(deParts.join(' '), natoParts.join(' '));
    }

    // ── Event Listener ───────────────────────────────────────────────────────

    const limitMsg = document.getElementById('limitMsg');
    const MAX_LENGTH = 30;

    function triggerShake() {
        limitMsg.classList.remove('show');
        void limitMsg.offsetWidth; // Reflow erzwingen → Animation startet neu
        limitMsg.classList.add('show');
    }

    // keydown feuert auch wenn maxlength den Input bereits blockiert
    inputField.addEventListener('keydown', (e) => {
        if (inputField.value.length >= MAX_LENGTH) {
            // Nur bei echten Zeichen schütteln, nicht bei Backspace, Arrows etc.
            if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
                triggerShake();
            }
        }
    });

    inputField.addEventListener('input', (e) => {
        const text = e.target.value;
        if (text.length >= MAX_LENGTH) {
            triggerShake();
        } else {
            limitMsg.classList.remove('show');
        }
        if (text) {
            translateText(text);
        } else {
            clearInfoBox();
        }
    });

    clearInputBtn.addEventListener('click', () => {
        inputField.value = '';
        clearInfoBox();
        limitMsg.classList.remove('show');
        inputField.focus();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
            inputField.value = '';
            clearInfoBox();
            return;
        }

        // Tastatur-Shortcut nur aktiv, wenn das Input-Feld nicht fokussiert ist
        if (document.activeElement === inputField) return;
        if (e.ctrlKey || e.altKey || e.metaKey) return;

        const letter = e.key.toUpperCase();
        if (germanMap.has(letter)) {
            showLetterInfo(letter);
        }
    });
});
=======
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
>>>>>>> 8dfbbf79b789e6b21385f7c3c8a21fd5c77a1ae2
