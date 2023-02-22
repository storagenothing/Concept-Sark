const nav = document.querySelector('#header-menu');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/NAV CLOSE.svg";
    } else {
        navBtnImg.src = "./img/nav-btn.png";
    }
}

AOS.init({
    once: true
});