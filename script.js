const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
alert("JavaScript Connected!");
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"});
};
const galleryImages = document.querySelectorAll('.gallery-item img');

const lightbox = document.querySelector('.lightbox');

const lightboxImg = document.querySelector('.lightbox-img');

const closeBtn = document.querySelector('.close-lightbox');

galleryImages.forEach(img => {

    img.addEventListener('click', () => {

        lightbox.style.display = 'flex';

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener('click', () => {

    lightbox.style.display = 'none';

});
// =========================
// GALLERY RIGHT TO LEFT
// =========================

const galleryItems = document.querySelectorAll('.gallery-item');

function revealGallery() {

    galleryItems.forEach((item, index) => {

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 100){

            setTimeout(() => {

                item.classList.add('show-gallery');

            }, index * 200);

        }

    });

}

window.addEventListener('scroll', revealGallery);

revealGallery();
