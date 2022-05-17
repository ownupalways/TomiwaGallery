// if (document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoad', ready)
// } else {
//     ready()
// }

// function ready() {}

    //Contact ModalBox
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var CloseBtn = document.getElementById("close");
    
    btn.onclick = () => {
        modal.style.display = "flex";
    }

    CloseBtn.onclick = () => {
       modal.style.display = "none"
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

//*********Menu Tab  Operation*********

var MenuContainer = document.getElementsByClassName("nav-link-container")[0]
var MenuButton = document.getElementsByClassName("nav-btn")[0]
var CloseButton = document.getElementsByClassName("closeX")[0]

function MenuGear() {
    MenuContainer.style.display = "block"
    MenuButton.style.display = "none"
    CloseButton.style.display = "block"
}

function CloseMenu() {
    MenuContainer.style.display = "none"
    MenuButton.style.display = "block"
    CloseButton.style.display = "none"
}

window.onclick = (event) => {
    if (event.target == MenuContainer) {
        MenuContainer.style.display = "none"
        MenuButton.style.display = "block"
        CloseButton.style.display = "none"
    }
}



 //**********Login interaction**********

 var UserAccountModal = document.getElementById("LoginModalPage")
 var Register = document.getElementById('RegistrationModalPage')
 var UserAccountBtn = document.getElementById("user-btn")

 function user() {
     UserAccountModal.style.display = "flex"
     Register.style.display = "none"
 }

 function NewAccount(){
     Register.style.display = "flex"
     UserAccountModal.style.display = "none"
 }

 function closeAccountOne() { UserAccountModal.style.display = "none" }

 function closeAccountTwo() { Register.style.display = "none" }

 window.onclick = (event) => {

     if (event.target == UserAccountModal) {
         UserAccountModal.style.display = "none"
     }

     if (event.target == Register) {
         Register.style.display = "none"
     }

 }

