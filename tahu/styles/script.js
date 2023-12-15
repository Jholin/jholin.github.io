const menutoggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menutoggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    const navButton = document.querySelectorAll('nav ul li a');
    const inputNav = document.querySelector('.input-nav')
    navButton.forEach(e => {
        e.addEventListener('click',function() {
            inputNav.checked = false;
            nav.classList.remove("slide");
        });
    })
});

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.top');
    const sticky = navbar.offsetTop + 1;
    const hero = document.querySelector(".hero");
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
        hero.classList.add("padding-top");
    } else {
        navbar.classList.remove("sticky");
        hero.classList.remove("padding-top");
    }
});