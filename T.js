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

    //slide automation

    var slideIndex = 0;

    showSlides();

    function showSlides(){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++){
            slides[i].style.display ="none";
        }

        slideIndex++;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }else {
            slides[slideIndex -1].style.display = "block";
            }
        //changes image every 3 second
        setTimeout(showSlides, 5000);
    }


    var flipCard = document.getElementsByClassName('images')

    for ( i = 0; i < flipCard.length; i++) {
        var flipButton = flipCard[i]

        flipButton.addEventListener('click', function(event){
            let buttonClicked = event.target
            buttonClicked.parentElement.classList.toggle('.active')
        })
    }