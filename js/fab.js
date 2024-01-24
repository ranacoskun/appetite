document.addEventListener('DOMContentLoaded', function () {
    setDefaultStyle();

    window.onscroll = function () {
        var header = document.querySelector(".page-header");
        if (window.pageYOffset > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    var isFabButtonActive = localStorage.getItem('fabButtonActive');
    var chosenStylesheet = localStorage.getItem('chosenStylesheet');

    if (isFabButtonActive === 'true' && chosenStylesheet) {
        document.getElementById('container-floating').classList.add('active');
        changeStyle(chosenStylesheet);
    }

    initializeMap();

});

function changeStyle(styleSheet) {
    let getThemeLink = document.querySelector('link#theme');
    getThemeLink.href = styleSheet;

    localStorage.setItem('chosenStylesheet', styleSheet);
    document.getElementById('container-floating').classList.add('active');
}

function setDefaultStyle() {
    changeStyle('css/minimalism.css');
}
