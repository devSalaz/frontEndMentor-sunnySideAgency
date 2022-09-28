let isMenuActive = false;

const menuBtn = document.querySelector(".menu-hamburger");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", function () 
{
    isMenuActive = !isMenuActive;
    if(isMenuActive)
    {
        menuBtn.classList.add("active");
        menuMobile.classList.add("active");
    }
    else
    {
        menuBtn.classList.remove("active");
        menuMobile.classList.remove("active");
    }
});