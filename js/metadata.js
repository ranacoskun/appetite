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