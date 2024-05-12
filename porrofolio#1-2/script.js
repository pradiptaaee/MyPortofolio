const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {

    let value = window.scrollY > 200;

    if (value) {
        nav.style.background = "#fff";
        nav.style.boxShadow = '1px 1px 10px #8988883c';
        nav.style.color = "#1D1F39";
        let navbar = document.querySelectorAll('.nav');
        navbar.forEach(function (element) {
            element.style.color = '#1d1f39';
        });
    } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = '0px 0px 0px #8988883c';
        nav.style.color = "#fff";
        let navbar = document.querySelectorAll('.nav');
        navbar.forEach(function (element) {
            element.style.color = '#fff';
        });
    }

    if (value) {
        document.querySelector('.about .container').classList.add('muncul');
        // document.querySelector('.about .contents').classList.add('muncul');

    } else {
        document.querySelector('.about .container').classList.remove('muncul');
        // document.querySelector('.about .side-content').classList.remove('muncul');

    }

});

const h2 = document.createElement('h2');
h2.innerText = 'asikk';
const content = document.getElementById('contents');
content.appendChild(h2);

 //loader
 onload = function(){
     let loader = document.getElementById("loader");

     setTimeout(() => {
         loader.style.display= "none";
         document.body.style.overflowY = "visible";
     }, 2000);
 }

//for carousel-slide
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.transform = "translateX(100%)";
    setTimeout(() => {
        slides[slideIndex - 1].style.transform = "translateX(0)";

    }, 10);
    // setTimeout(showSlides, 6000);
}

document.getElementById("prevbtn").addEventListener('click', function () {
    slideIndex--;
    showSlides();
});

document.getElementById("nextbtn").addEventListener('click', function () {
    slideIndex++;
    showSlides();
});
