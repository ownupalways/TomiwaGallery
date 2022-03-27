    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var job = document.getElementsByClassName("close")[0];

    btn.onclick = ()=> {
        modal.style.display = "block";
    }

    job.onclick = () => {
       modal.style.display = "none";
    }

    window.onclick = (event) => {
        if(event.target == modal ) {
            modal.style.display = "none";
        }
    }

    //Login interaction

    var UserAccountModal = document.getElementById("formModalPage")
    var  UserAccountBtn = document.getElementById("user-btn")
    var UserAccountCloseBtn = document.getElementById("closeAccount")

    /*UserAccountBtn.onclick = () => {
        UserAccountModal.style.display = "flex"
    }*/

    function user(){
        UserAccountModal.style.display = "flex"
    }

    function close(event){
        if(event.target == UserAccountModal){
            UserAccountModal.style.display = "none"
        }
    }
    /*UserAccountCloseBtn.onclick = () => {
        UserAccountModal.style.display = "none"
    }*/

    window.onclick = (event) => {
        if (event.target == UserAccountModal) {
            UserAccountModal.style.display = "none"
        }
    }

    //Switching Login and Register Pages

    var newAccount = document.getElementsByClassName('registerPage')
    var loginAccount = document.getElementsByClassName('LoginPage')

    document.getElementsByClassName('newAccount').onclick = () =>{
        console.log("clicked")
        loginAccount.classList.remove('active')
        newAccount.classList.toggle('active')
    }

    document.getElementsByClassName('login-account').onclick = () =>{
        console.log("clicked")
        newAccount.classList.toggle('active')
        loginAccount.classList.remove('active')
    }

    //slide automation

    var slideIndex = 0;

    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++){
            slides[i].style.display ="none";
        }

        slideIndex++;
        if(slideIndex > slides.length){
            slideIndex = 0;
        }else{
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

