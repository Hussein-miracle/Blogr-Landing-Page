"use strict";

const menuOpenBtn = document.getElementById("menu-open__btn");
const menuCloseBtn = document.getElementById("menu-close__btn");
const menuContent = document.querySelector("#mobile-menu__content");
const signupBtn = document.getElementById("sign-up");
// console.log(menuContent);




const productsLinksBtn = document.querySelector("#product__links--btn");
const  productsLinksContainer = document.querySelector("#product__links");
const  productsLinksIcon = document.querySelector("#product__links--icon");


const companyLinksBtn = document.querySelector("#company__links--btn");
const companyLinksBtnContainer = document.querySelector("#company__links--btn-container");
const  companyLinksContainer = document.querySelector("#company__links");
const  companyLinksIcon = document.querySelector("#company__links--icon");



const connectLinksBtn = document.querySelector("#connect__links--btn");
const  connectLinksContainer = document.querySelector("#connect__links");
const  connectLinksIcon = document.querySelector("#connect__links--icon");



//MOBILE NAV

let click = 0; 

const   mobProductsLinksBtn = document.querySelector("#mob-product__links--btn");
const   mobProductsLinksBtnContainer = document.querySelector("#mob-product__links--btn-container");
const  mobProductsLinksContainer = document.querySelector("#mob-product__links");
const  mobProductsLinksIcon = document.querySelector("#mob-product__links--icon");


const mobCompanyLinksBtn = document.querySelector("#mob-company__links--btn");
const mobCompanyLinksBtnContainer = document.querySelector("#mob-company__links--btn-container");
const  mobCompanyLinksContainer = document.querySelector("#mob-company__links");
const  mobCompanyLinksIcon = document.querySelector("#mob-company__links--icon");



const mobConnectLinksBtn = document.querySelector("#mob-connect__links--btn");
const mobConnectLinksBtnContainer = document.querySelector("#mob-connect__links--btn");
const  mobConnectLinksContainer = document.querySelector("#mob-connect__links");
const  mobConnectLinksIcon = document.querySelector("#mob-connect__links--icon");
// console.log(headerLinkBtns)
// console.log(headerLinkDropdowns)


//product link hover
const handleProductDropdownOpen = function(){
    productsLinksContainer.classList.remove("hidden");
    productsLinksIcon.style.transform = "rotate(-180deg)";
    productsLinksIcon.style.transition = "all .15s linear";
}
const handleProductDropdownClose = function(){
    productsLinksContainer.classList.add("hidden");
    productsLinksIcon.style.transform = "rotate(0deg)";
}



//COMPANY LINK HOVER
const handleCompanyDropdownOpen = function(){
    companyLinksContainer.classList.remove("hidden");
    companyLinksIcon.style.transform = "rotate(-180deg)";
    companyLinksIcon.style.transition = "all .15s linear";
}
const handleCompanyDropdownClose = function(){
    companyLinksContainer.classList.add("hidden");
    companyLinksIcon.style.transform = "rotate(0deg)";
}


//CONNECT LINK HOVER
const handleConnectDropdownOpen = function(){
    connectLinksContainer.classList.remove("hidden");
    connectLinksIcon.style.transform = "rotate(-180deg)";
    connectLinksIcon.style.transition = "all .15s linear";
}
const handleConnectDropdownClose = function(){
    connectLinksContainer.classList.add("hidden");
    connectLinksIcon.style.transform = "rotate(0deg)";
}

//MOBILE ACTIONS




const handleDesktopHeaderEvents = function() {

    productsLinksBtn.addEventListener("mouseenter",handleProductDropdownOpen);
    productsLinksContainer.addEventListener("mouseleave",handleProductDropdownClose);
    productsLinksContainer.addEventListener("mouseenter",handleProductDropdownOpen);
    

    companyLinksBtn.addEventListener("mouseenter",handleCompanyDropdownOpen);
    companyLinksContainer.addEventListener("mouseleave",handleCompanyDropdownClose);
    companyLinksContainer.addEventListener("mouseenter",handleCompanyDropdownOpen);
    
    

    connectLinksBtn.addEventListener("mouseenter",handleConnectDropdownOpen);
    connectLinksContainer.addEventListener("mouseleave",handleConnectDropdownClose);
    connectLinksContainer.addEventListener("mouseenter",handleConnectDropdownOpen);


    
}

const mobileProductDropdown = function (){
    mobProductsLinksIcon.style.transition = "all .3s linear";
    
    if(click <= 1){
        click++;
    }
    

    if(click === 1){
        mobProductsLinksContainer.classList.remove("hidden");
        mobProductsLinksIcon.style.transform = "rotate(180deg)";
    }

    if(click === 2){
        click = 0;
        mobProductsLinksContainer.classList.add("hidden");
        mobProductsLinksIcon.style.transform = "rotate(0deg)";
    }
    
}
const mobileCompanyDropdown = function (){
    mobCompanyLinksIcon.style.transition = "all .3s linear";
    if(click <= 1){
        click++;
    }

    if(click === 1){
        mobCompanyLinksContainer.classList.remove("hidden");
        mobCompanyLinksIcon.style.transform = "rotate(180deg)";
    }

    if(click === 2){
        click = 0;
        mobCompanyLinksContainer.classList.add("hidden");
        mobCompanyLinksIcon.style.transform = "rotate(0deg)";
    }
    
}

const mobileConnectDropdown = function (){
    mobConnectLinksIcon.style.transition = "all .3s linear";
    if(click <= 1){
        click++;
    }

    if(click === 1){
        mobConnectLinksContainer.classList.remove("hidden");
        mobConnectLinksIcon.style.transform = "rotate(180deg)";
    }

    if(click === 2){
        click = 0;
        mobConnectLinksContainer.classList.add("hidden");
        mobConnectLinksIcon.style.transform = "rotate(0deg)";
    }
    
}


const handleMobileHeaderEvents = function() {
    const handleCloseNav = function(){
        menuCloseBtn.style.display = "none";
        menuOpenBtn.style.display = "block";
        menuContent.style.top = "-200%";
    }

    menuOpenBtn.addEventListener("click",() => {
        menuCloseBtn.style.display = "block";
        menuOpenBtn.style.display = "none";
        
        menuContent.style.top = "75px";
    })
    signupBtn.addEventListener("click",handleCloseNav)

    menuCloseBtn.addEventListener("click",handleCloseNav)

    mobProductsLinksBtn.addEventListener("click",mobileProductDropdown);

    mobCompanyLinksBtn.addEventListener("click",mobileCompanyDropdown);

    mobConnectLinksBtn.addEventListener("click",mobileConnectDropdown);
    
}



const handleHeaderEvents = function () {
    handleDesktopHeaderEvents();
    handleMobileHeaderEvents();
}

handleHeaderEvents();