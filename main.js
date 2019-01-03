const curve = document.querySelector('.curve');

function switchImage(width) {
    if (width.matches) {
        curve.src = 'images/bg-curve-desktop.svg';
    } else {
        curve.src = 'images/bg-curve-mobile.svg'
    }
}

let width = window.matchMedia("(min-width: 40rem)");

switchImage(width);

width.addEventListener(switchImage);