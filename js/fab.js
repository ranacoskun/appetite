// document.addEventListener('DOMContentLoaded', function () {
//     setDefaultStyle();
// });

function changeStyle(styleSheet) {
    let getThemeLink = document.querySelector('link#theme');
    getThemeLink.href = styleSheet;

    localStorage.setItem('chosenStylesheet', styleSheet);
    document.getElementById('container-floating').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    setDefaultStyle();

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


