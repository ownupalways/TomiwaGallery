var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var job = document.getElementById("close");

btn.onclick = ()=> {
    modal.style.display = "flex";
}

job.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Login interaction

var UserAccountModal = document.getElementById("LoginModalPage")
var Register = document.getElementById('RegistrationModalPage')
var  UserAccountBtn = document.getElementById("user-btn")
var UserAccountCloseBtn = document.getElementById("closeLogin")
var RegisterClosePad = document.getElementById('closeRegistration')

function user(){
    UserAccountModal.style.display = "flex"
    Register.style.display = "none"
}

function NewAccount(){
    Register.style.display = "flex"
    UserAccountModal.style.display = "none"
}

UserAccountCloseBtn.onclick = () => {
    UserAccountModal.style.display = "none"
}

RegisterClosePad.onclick = () => {
    Register.style.display = "none"
}

// window.onclick = (event) => {
//     if (event.target == UserAccountModal) {
//         UserAccountModal.style.display = "none"
//     }
// }

// window.onclick = (event) => {
//     if(event.target == Register) {
//         Register.style.display = "none"
//     }
// }
//slide automation



showSlides();


function showSlides() {
    let i;
    let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
        for(i = 0; i < slides.length; i++) {

             var SlideCount = slides[i]
             SlideCount.style.display ="none";
        }

        
        slideIndex++;

        if(slideIndex > slides.length)
            {slideIndex = 1

            for(i = 0; i < dots.length; i++) {

                var dotRows = dots[i]

                dotRows.className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex -1].style.display = "block";
                            
            dots[slideIndex-1].className += " active";

            //changes image every 3 second
            setTimeout(showSlides, 3000);
        }

}

//Menu Tab  Operation
let MenuContainer = document.getElementsByClassName("nav-link-container")[0]
let Menulist = document.getElementsByClassName("nav-btn")[0]

let CloseTab = document.getElementsByClassName("closeX")[0]

function MenuGear() {
    var MenuContainer = document.getElementsByClassName("nav-link-container")[0]
    var Menulist = document.getElementsByClassName("nav-btn")[0]

    var CloseTab = document.getElementsByClassName("closeX")[0]

    MenuContainer.style.display = "block"
    Menulist.style.display = "none"
    CloseTab.style.display = "block"
}

function CloseMenu() {
    var MenuContainer = document.getElementsByClassName("nav-link-container")[0]
    var Menulist = document.getElementsByClassName("nav-btn")[0]

    var CloseTab = document.getElementsByClassName("closeX")[0]
    MenuContainer.style.display = "none"
    Menulist.style.display = "block"
    CloseTab.style.display = "none"
}

window.onclick = (event) => {
    var MenuContainer = document.getElementsByClassName("nav-link-container")[0]
    var Menulist = document.getElementsByClassName("nav-btn")[0]

    var CloseTab = document.getElementsByClassName("closeX")[0]
    if (event.target == MenuContainer) {
        MenuContainer.style.display = "none"
        Menulist.style.display = "block"
        CloseTab.style.display = "none"
    }
    if (event.target == UserAccountModal) {
       UserAccountModal.style.display = "none"
    }

    if (event.target == Register) {
        Register.style.display = "none"
    }
}