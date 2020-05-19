let navbar = document.querySelector(".navbar");
const winHeight = document.documentElement.clientHeight;
let snap1 = 1;
let snap2 = 1;

function responsiver() {
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        return;
    }
    navbar.className = "navbar";
}

function scrollSnap() {
    if ((snap1 === 1) && (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
        window.scrollTo(0, winHeight);
        snap1 = 0;
        return;
    };
    if ((snap2 === 1) && (document.body.scrollTop > (winHeight + 50) || document.documentElement.scrollTop > (winHeight + 50))) {
        window.scrollTo(0, (2 * winHeight));
        snap2 = 0;
    };
};

window.onscroll = () => {
    scrollSnap();
    navbar.style.backgroundColor = '#0bfa';
    navbar.style.backdropFilter = 'saturate(180%) blur(20pnavbar)';
};