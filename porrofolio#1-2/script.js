// changeTeks
const texts = ["Frontend ", "Web Developer ", "Freelancer "];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

(function type() {
    const element = document.getElementById("changeTeks");
    const fullText = texts[textIndex];

    element.textContent = isDeleting
        ? fullText.substring(0, charIndex--)
        : fullText.substring(0, charIndex++);

    if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(type, 2000); // jeda sebelum menghapus teks
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // jeda sebelum mengetik teks berikutnya
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
})();

// HomePage
window.addEventListener('load', function() {
    document.getElementById('sub-content').classList.add('submuncul');

    document.getElementById('image-content').classList.add('imagemuncul');

    document.querySelector('.my-sosmed').classList.add('sosmedmuncul');
});




const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {

    // navbar active
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });

    // scroll
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

//detail about click
function clickdetail(){
    const boxDetail = document.querySelector('.myself')
    console.log('ascajnc')
    boxDetail.classList.add('show');
}



// loader
// onload = function(){
//     let loader = document.getElementById("loader");

//     setTimeout(() => {
//         loader.style.display= "none";
//         document.body.style.overflowY = "visible";
//     }, 2000);
// }

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

//jam digital
// function updateClock(){
//     const clock = document.getElementById('clock');
//     const now= new Date();
//     const hours = string(now.getHours()).padStart(2, '0');
//     const minute = string(now. getMinutes()).padStart(2, '0');
//     const seconds = string(now.getSeconds()).padStart(2, '0');
//     clock.textContent= `${hours}:${minute}:${seconds}`;
// }
// setInterval(updateClock, 1000);
// updateClock();

//hover pada box portofolio
const boxs = document.querySelectorAll('.portofolio .contents');
boxs.forEach(box => {
    box.addEventListener('mouseover', () => {
        boxs.forEach(b => {
            const textbox = b.querySelector('.section');
            if(b === box){
                b.style.transform='scale(1.1)';
                b.style.filter='none';
                textbox.style.transform='translateX(0)';
            } else {
                b.style.transform = 'none';
                b.style.filter = 'blur(8px)';
                textbox.style.transform='translateX(300%)';
            }
        })
    })

    box.addEventListener('mouseout', () => {
        boxs.forEach(b => {
            const textbox = b.querySelector('.section');
            b.style.transform = 'none';
            b.style.filter = 'none';
            textbox.style.transform='translateX(300%)';
        })
    })
})

// //latihn dicoding semntara
// let myjob;
// myjob = "tes";
// myjob = "haha";

// console.log(myjob);

// if (false === true) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// // for(let i = 1; i < 9; i+=2){
// //     console.log(i);
// // }

// const restaurant = {
//     name: "Bakso Mang Dicoding",
//     city: "Bandung",
//     "favorite drink": "Es Teh",
//     "favorite food": "Bakso",
//     isVegan: false
// }

// const name = restaurant.name;
// const favoriteDrink = restaurant["favorite drink"];

// console.log(name, favoriteDrink);

// //array
// const evenNumber = []

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         evenNumber.push(i)
//     }
// }

// console.log(evenNumber);

// //map
// const currency = new Map([
//     ["USD",14000],
//     ["JYP",131],
//     ["SGD",11000],
//     ["MYR",3500]
// ]);

// const priceInJYP = 5000;

// const priceInIDR = priceInJYP * currency.get("JYP")
// console.log(priceInIDR);
 
// const pickupline = (programer) => {
//     if(programer == !true){
//         return ("halo dek~");
//     }else {
//         return("hello word");
//     }
// }

// console.log(pickupline(false));
// //sampe sini aja