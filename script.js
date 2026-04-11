document.addEventListener("DOMContentLoaded", function () {
    const alphabetDiv   = document.getElementById('alphabet');
    const infoDiv       = document.getElementById('info');
    const showAlphabetBtn = document.getElementById('showAlphabet');
    const alphabetPopup = document.getElementById('alphabetPopup');
    const closeBtn      = document.querySelector('.close');
    const inputField    = document.getElementById('inputField');
    const clearInputBtn = document.getElementById('clearInput');

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

    const specialChars = [
        { symbol: '.',  display: '.',  de: 'Punkt',             en: 'Period'            },
        { symbol: ',',  display: ',',  de: 'Komma',             en: 'Comma'             },
        { symbol: '!',  display: '!',  de: 'Ausrufezeichen',    en: 'Exclamation mark'  },
        { symbol: '?',  display: '?',  de: 'Fragezeichen',      en: 'Question mark'     },
        { symbol: ':',  display: ':',  de: 'Doppelpunkt',       en: 'Colon'             },
        { symbol: ';',  display: ';',  de: 'Semikolon',         en: 'Semicolon'         },
        { symbol: '"',  display: '"',  de: 'Anführungszeichen', en: 'Quotation mark'    },
        { symbol: '(',  display: '(',  de: 'Klammer auf',       en: 'Open parenthesis'  },
        { symbol: ')',  display: ')',  de: 'Klammer zu',        en: 'Close parenthesis' },
        { symbol: '+',  display: '+',  de: 'Plus',              en: 'Plus'              },
        { symbol: '-',  display: '-',  de: 'Bindestrich',       en: 'Hyphen'            },
        { symbol: '=',  display: '=',  de: 'Gleich',            en: 'Equals'            },
        { symbol: '_',  display: '_',  de: 'Unterstrich',       en: 'Underscore'        },
        { symbol: '#',  display: '#',  de: 'Raute',             en: 'Hash'              },
        { symbol: '@',  display: '@',  de: 'At',                en: 'At sign'           },
        { symbol: '&',  display: '&',  de: 'Und-Zeichen',       en: 'Ampersand'         },
        { symbol: '%',  display: '%',  de: 'Prozent',           en: 'Percent'           },
        { symbol: '€',  display: '€',  de: 'Euro',              en: 'Euro'              },
        { symbol: '$',  display: '$',  de: 'Dollar',            en: 'Dollar'            },
        { symbol: '§',  display: '§',  de: 'Paragraf',          en: 'Section sign'      },
        { symbol: '^',  display: '^',  de: 'Zirkumflex',        en: 'Caret'             },
        { symbol: ' ',  display: '·',  de: 'Leerzeichen',       en: 'Space'             },
    ];

    const germanMap      = new Map(germanAlphabet.map(({ letter, word }) => [letter, word]));
    const natoMap        = new Map(natoAlphabet.map(({ letter, word }) => [letter, word]));
    const deNumberMap    = new Map(Object.entries(numbers).map(([k, v]) => [k, v.de]));
    const natoNumberMap  = new Map(Object.entries(numbers).map(([k, v]) => [k, v.nato]));
    const specialCharMap = new Map(specialChars.map(({ symbol, de, en }) => [symbol, { de, en }]));

    function makeInfoRow(label, text) {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = label;
        p.appendChild(strong);
        p.append(' ' + text);
        return p;
    }

    function showInfoBox(deText, natoText) {
        infoDiv.innerHTML = '';
        infoDiv.classList.remove('show');
        infoDiv.appendChild(makeInfoRow('Deutsch:', deText));
        infoDiv.appendChild(makeInfoRow('NATO:', natoText));
        requestAnimationFrame(() => {
            requestAnimationFrame(() => infoDiv.classList.add('show'));
        });
    }

    function clearInfoBox() {
        infoDiv.innerHTML = '';
        infoDiv.classList.remove('show');
    }

    const gridFragment = document.createDocumentFragment();
    germanAlphabet.forEach(({ letter }) => {
        const div = document.createElement('div');
        div.textContent = letter;
        div.addEventListener('click', () => showLetterInfo(letter));
        gridFragment.appendChild(div);
    });
    alphabetDiv.appendChild(gridFragment);

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
    alphabetDiv.insertAdjacentElement('afterend', specialCharsDiv);

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

    const creditEl = document.querySelector('.credit');
    const heartEl  = document.querySelector('.credit-heart');

    heartEl.addEventListener('animationend', () => {
        heartEl.classList.remove('beating');
    });

    if (isTouchDevice) {
        inputField.addEventListener('touchend', () => {
            inputField.focus();
        }, { passive: true });

        heartEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const opening = !creditEl.classList.contains('expanded');
            creditEl.classList.toggle('expanded');
            if (opening) {
                heartEl.classList.remove('beating');
                void heartEl.offsetWidth;
                heartEl.classList.add('beating');
            }
        });

        document.addEventListener('click', () => {
            creditEl.classList.remove('expanded');
        });
    } else {
        inputField.focus();

        creditEl.addEventListener('mouseenter', () => {
            heartEl.classList.remove('beating');
            void heartEl.offsetWidth;
            heartEl.classList.add('beating');
        });
    }

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

    const limitMsg = document.getElementById('limitMsg');
    const MAX_LENGTH = 30;

    function triggerShake() {
        limitMsg.classList.remove('show');
        void limitMsg.offsetWidth;
        limitMsg.classList.add('show');
    }

    inputField.addEventListener('keydown', (e) => {
        if (inputField.value.length >= MAX_LENGTH) {
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

        if (document.activeElement === inputField) return;
        if (e.ctrlKey || e.altKey || e.metaKey) return;

        const letter = e.key.toUpperCase();
        if (germanMap.has(letter)) {
            showLetterInfo(letter);
        }
    });
});
