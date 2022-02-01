"use strict";

const menuOpenBtn = document.getElementById("menu-open__btn");
const menuCloseBtn = document.getElementById("menu-close__btn");
const menuContent = document.getElementById("mobile-menu__content");

console.log(menuContent)
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





const handleHeaderEvents = function() {

    productsLinksBtn.addEventListener("mouseenter",handleProductDropdownOpen);
    productsLinksContainer.addEventListener("mouseleave",handleProductDropdownClose);
    productsLinksContainer.addEventListener("mouseenter",handleProductDropdownOpen);
    

    companyLinksBtn.addEventListener("mouseenter",handleCompanyDropdownOpen);
    companyLinksContainer.addEventListener("mouseleave",handleCompanyDropdownClose);
    companyLinksContainer.addEventListener("mouseenter",handleCompanyDropdownOpen);
    
    

    connectLinksBtn.addEventListener("mouseenter",handleConnectDropdownOpen);
    connectLinksContainer.addEventListener("mouseleave",handleConnectDropdownClose);
    connectLinksContainer.addEventListener("mouseenter",handleConnectDropdownOpen);


    menuOpenBtn.addEventListener("click",() => {
        menuCloseBtn.style.display = "block";
        menuOpenBtn.style.display = "none";
        // menuContent.style.visibility = "visible";
        menuContent.style.opacity = "1";
    })

    menuCloseBtn.addEventListener("click",() => {
        menuCloseBtn.style.display = "none";
        menuOpenBtn.style.display = "block";
        // menuContent.style.visibility = "hidden";
        menuContent.style.opacity = "0";
        
    })
}

handleHeaderEvents();