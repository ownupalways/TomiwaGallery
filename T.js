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
        if (event.target == modal ) {
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

    UserAccountCloseBtn.onclick = () => {
        UserAccountModal.style.display = "none"
    }

    RegisterClosePad.onclick = () => {
        Register.style.display = "none"
    }

    window.onclick = (event) => {
        if (event.target == UserAccountModal) {
            UserAccountModal.style.display = "none"
        }else if(event.target == Register) {
            Register.style.display = "none"
        }
    }

    //slide automation

    let slideIndex = 0;

    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        for(i = 0; i < slides.length; i++) {

            slides[i].style.display ="none";
        }

        slideIndex++;

        if(slideIndex > slides.length){
            slideIndex = 0;
        }else {
                slides[slideIndex -1].style.display = "block";
            }
            
        //changes image every 3 second
        setTimeout(showSlides, 3000);
    }


    var flipCard = document.getElementsByClassName('images')

    for ( i = 0; i < flipCard.length; i++) {
        var flipButton = flipCard[i]

        flipButton.addEventListener('click', function(event){
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.classList.toggle('rotated')
        })
    }

    

