// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ===============================
// Scroll Reveal
// ===============================

const sections=document.querySelectorAll("section");

const reveal=()=>{

const trigger=window.innerHeight*0.85;

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

};

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// Navbar Background
// ===============================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(20,54,43,.92)";
navbar.style.backdropFilter="blur(10px)";
navbar.style.transition=".35s";

}else{

navbar.style.background="transparent";

}

});


// ===============================
// Image Lightbox
// ===============================

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

const image=document.createElement("img");

image.src=img.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(image);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


// ===============================
// Floating Buttons
// ===============================

const floating=document.createElement("div");

floating.className="floating-buttons";

floating.innerHTML=`

<a class="float-btn"
href="https://wa.me/91XXXXXXXXXX">

💬

</a>

<a class="float-btn"
href="tel:+91XXXXXXXXXX">

📞

</a>

`;

document.body.appendChild(floating);


// ===============================
// Hero Fade
// ===============================

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity="0";

hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="1s";

hero.style.opacity="1";

hero.style.transform="translateY(0)";

},300);

});
const roomSlides = document.querySelectorAll(".room-slide");

if (roomSlides.length > 0) {

    let currentSlide = 0;

    setInterval(() => {

        roomSlides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % roomSlides.length;

        roomSlides[currentSlide].classList.add("active");

    }, 4000);

}
document.querySelectorAll('.room-image-slider').forEach(slider => {

    const slides = slider.querySelectorAll('.room-slide');

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove('active');

        current = (current + 1) % slides.length;

        slides[current].classList.add('active');

    }, 3500);

});
