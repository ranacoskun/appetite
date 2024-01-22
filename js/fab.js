// document.addEventListener('DOMContentLoaded', function () {
//     setDefaultStyle();
// });

function changeStyle(styleSheet) {
    var links = document.head.getElementsByTagName('link');

    for (var i = 0; i < links.length; i++) {
        if (links[i].rel === 'stylesheet') {
            links[i].href = styleSheet;
        }
    }

    localStorage.setItem('chosenStylesheet', styleSheet);
    document.getElementById('container-floating').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var isFabButtonActive = localStorage.getItem('fabButtonActive');
    var chosenStylesheet = localStorage.getItem('chosenStylesheet');

    if (isFabButtonActive === 'true' && chosenStylesheet) {
        document.getElementById('container-floating').classList.add('active');
        changeStyle(chosenStylesheet);
    }
});

function setDefaultStyle() {
    changeStyle('../css/minimalism.css');
}