function createTextHighlight(ele) {
    let styles = window.getComputedStyle(ele);
    let origBkgColor = styles.backgroundColor;

    let searchArg = '';
    let sel = -1;

    const handlers = {
        input: inputHandler,
        scroll: scrollHandler
    };

    // ele.classList.add('hlta-textarea');
    //ele.addEventListener('input', handlers.input);
    //ele.addEventListener('scroll', handlers.scroll);

    // let nodeCont = document.createElement('div');
    // nodeCont.classList.add('hlta-container');
    // let container = nodeCont;

    // let nodeBack = document.createElement('div');
    // nodeBack.classList.add('hlta-backdrop');
    // let backdrop = nodeBack;

    let nodeHilite = document.createElement('div');
    nodeHilite.classList.add('hlta-highlight');
    let hilite = nodeHilite;

    // ele.parentNode.insertBefore(nodeCont, ele.nextSibling);
    // backdrop.append(hilite);
    // container.append(backdrop);
    // container.appendChild(ele);

    // let observer = new ResizeObserver(resizeObs);
    // observer.observe(ele);
    // inputHandler();

    return {
        search: function (arg) {
            searchArg = arg;
            inputHandler();
            sel = -1;
            next();
        },
        next: next,
        prev: prev,
        count: function () {
            let eles = hilite.querySelectorAll('mark');
            return eles.length;
        },
        clear: function () {
            searchArg = '';
            hilite.innerHTML = hilite.textContent;
            sel = -1;
        },
        destroy: function () {
            ele.removeEventListener('input', handlers.input);
            ele.removeEventListener('scroll', handlers.scroll);
            observer.disconnect();

            container.parentNode.insertBefore(ele, container);
            while (container.firstChild) {
                container.removeChild(container.lastChild);
            }
            container.remove();
        }
    };

    function resizeObs() {
        let styles = window.getComputedStyle(ele);
        let width = ele.scrollWidth;
        let height = ele.offsetHeight;

        let css = `width: ${width}px; height: ${height}px; margin: ${styles.marginTop} ${styles.marginRight} ${styles.marginBottom} ${styles.marginLeft}; 
                   background-color: ${origBkgColor}`;
        backdrop.style.cssText = css;
        copyStyles(ele, hilite, ['width', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'borderTop', 'letterSpacing',
            'borderLeft', 'borderRight', 'borderBottom', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight']);
        hilite.style.minHeight = styles.height;
        hilite.style.whiteSpace = 'pre-wrap';
    }

    function inputHandler() {
        hilite.innerHTML = markText();
        scrollHandler();
        if (sel > -1) { setSelection(); }
    }

    function copyStyles(src, dest, styles2Copy) {
        let styles = window.getComputedStyle(src);
        styles2Copy.forEach((stl) => dest.style[stl] = styles[stl])
    }

    function markText() {
        let txt = ele.innerText; // Use innerText to get the text content of the element
        if (searchArg) {
            let boundary = '\\b';
            let re = new RegExp(boundary + '(' + escapeString(searchArg) + ')' + boundary, 'gi');
            return txt.replace(re, '<mark>$&</mark>');
        } else {
            return txt;
        }
    }

    function escapeString(txt) {
        let specials = ['-', '[', ']', '/', '{', '}', '(', ')', '*', '+', '?', '.', '\\', '^', '$', '|'];
        return txt.replace(RegExp('[' + specials.join('\\') + ']', 'g'), '\\$&');
    }

    function scrollHandler() {
        backdrop.scrollTop = ele.scrollTop || 0;
        let sclLeft = ele.scrollLeft;
        backdrop.style.transform = (sclLeft > 0) ? 'translateX(' + -sclLeft + 'px)' : '';
    }

    function setSelection(scroll) {
        let eles = hilite.querySelectorAll('mark');
        let len = eles.length;

        if (sel >= len) { sel = 0; }
        if (sel < 0) { sel = len - 1; }

        for (let i = 0; i < len; ++i) {
            if (i == sel) {
                eles[i].classList.add('sel');
                if (scroll) { ele.scrollTop = eles[i].offsetTop > 10 ? eles[i].offsetTop - 10 : eles[i].offsetTop; }
            } else {
                eles[i].classList.remove('sel');
            }
        }
    }

    function next() {
        sel += 1;
        setSelection(true);
    }

    function prev() {
        sel -= 1;
        setSelection(true);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll(".dish, .drink, .place, .person");

    const annotatedWords = {
        dish: new Map(),
        drink: new Map(),
        place: new Map(),
        person: new Map(),
    };

    function normalizeText(text) {
        return text.toLowerCase().trim();
    }

    function highlightWords(className) {
        elements.forEach(element => {
            if (element.classList.contains(className)) {
                element.classList.add("highlighted");
            } else {
                element.classList.remove("highlighted");
            }
        });
    }

    // Update the list of words for a specific class
    function updateList(className) {
        const wordMap = annotatedWords[className];
        const list = document.getElementById("annotated-words-list");
        list.innerHTML = ``;

        // Check if wordMap is defined before iterating over its entries
        if (wordMap) {
            for (const [word, count] of wordMap.entries()) {
                const listItem = document.createElement("li");
                listItem.textContent = `${word} (${count})`;
                list.appendChild(listItem);
            }
        }

        // Highlight words with the corresponding class
        highlightWords(className);
    }

    function updateHighlightedWords() {
        const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked'))
            .map(checkbox => checkbox.getAttribute('data-class'));

        // Create a Map to store all selected words and their frequencies
        const allSelectedWords = new Map();

        // Clear the list before updating for all selected categories
        const listContainer = document.getElementById("annotated-words-list");
        listContainer.innerHTML = "";

        // Update the list for each selected category
        selectedCategories.forEach(className => {
            const wordMap = annotatedWords[className];
            for (const [word, count] of wordMap.entries()) {
                // Add or update the frequency of the word
                allSelectedWords.set(word, (allSelectedWords.get(word) || 0) + count);
            }
        });

        // Update the list for all selected categories
        allSelectedWords.forEach((count, word) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${word} (${count})`;
            listItem.addEventListener("click", function () {
                find.value = word;
                markText();
            });
            listContainer.appendChild(listItem);
        });

        // Highlight words for all selected categories
        elements.forEach(element => {
            const word = normalizeText(element.textContent);
            if (allSelectedWords.has(word)) {
                element.classList.add("highlighted");
            } else {
                element.classList.remove("highlighted");
            }
        });

        count.textContent = allSelectedWords.size;
        hopperButtons();
    }

    function displayAnnotatedWordList(wordSet) {
        const listContainer = document.getElementById("annotated-words-list");
        listContainer.innerHTML = "";

        wordSet.forEach(word => {
            const listItem = document.createElement("li");
            listItem.textContent = `${word}`;
            listItem.addEventListener("click", function () {
                find.value = word;
                markText();
            });
            listContainer.appendChild(listItem);
        });
    }

    function initializeTextHighlighter() {
        tarea = document.getElementById('txt');
        find = document.getElementById('find');
        count = document.getElementById('count');
        hoppers = document.getElementById('hoppers');
        hilite = createTextHighlight(tarea);

        count.textContent = '0';
        tarea.addEventListener('input', inputHandler);
        inputHandler();
    }

    // Function to handle input changes
    function inputHandler() {
        count.textContent = hilite.count();
        hopperButtons();
    }

    // Function to handle hopper buttons visibility
    function hopperButtons() {
        +count.textContent ? hoppers.classList.remove('hidden') : hoppers.classList.add('hidden');
    }

    // Attach event listeners to category checkboxes
    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', updateHighlightedWords);
    });

    // Populate the annotated words and counts
    elements.forEach(element => {
        const className = element.classList[0];
        const word = normalizeText(element.textContent);
        annotatedWords[className].set(word, (annotatedWords[className].get(word) || 0) + 1);
    });

    // Initially populate the list with "dish" class words ??
    updateList("");
    initializeTextHighlighter();

});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.display = "block";
}