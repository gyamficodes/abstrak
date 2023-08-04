// NavBar code
const scrollNav = document.querySelector('#navbar');
function handleScroll(){
    const scrollPosition = window.scrollY;
    const scroll = scrollPosition.toFixed(0);
    if(scroll >= 300 ){
        scrollNav.style.position = 'fixed';
        scrollNav.style.left =  0;
        scrollNav.style.top = 0;
        scrollNav.style.right = 0;
        scrollNav.style.background = 'black';
        scrollNav.style.zIndex = 9999;
        scrollNav.style.paddingTop = '50px';
        scrollNav.style.paddingBottom = '50px';
        scrollNav.style.paddingLeft = '60px';
        scrollNav.style.paddingRight = '60px';
    }
    if(scroll == 0){
        scrollNav.style.position = 'relative';
        scrollNav.style.background = 'transparent';

    }
}

window.addEventListener('scroll', handleScroll)
// NavBar code

//scrowTop code
const scrollUp = document.querySelector('#pageTop')

function handleScrollUp() {
    const toTop = window.scrollY;
    const scroll = toTop.toFixed(0)
    
     window.scrollTo({
        top:0 ,
        behavior: "smooth"
     })
}

scrollUp.addEventListener('click',handleScrollUp)

//scrowTop codtoTe

// hide and 

const closeMenu = document.querySelector('#close')
const showMenu = document.querySelector('#show')
const mobileMenu = document.querySelector('#mobile')


function handleShowMenu() {
    mobileMenu.classList.remove('-translate-x-[100%]')
    mobileMenu.classList.add('translate-x-[100%]')
}

function hideMenu() {
    mobileMenu.classList.add('-translate-x-[100%]')
    mobileMenu.classList.remove('translate-x-[100%]')

}

closeMenu.addEventListener('click', hideMenu)

showMenu.addEventListener('click', handleShowMenu)
