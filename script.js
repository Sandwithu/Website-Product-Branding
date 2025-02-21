let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("nav-dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-link-list');
    navLinks.classList.toggle('active');
}

let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
    let testimonials = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("testimonial-dot");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {testimonialIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    testimonials[testimonialIndex-1].style.display = "block";
    dots[testimonialIndex-1].className += " active";
    setTimeout(showTestimonials, 2000); // Change testimonial every 5 seconds
}

function currentTestimonial(n) {
    showTestimonials(testimonialIndex = n);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-link-list');
    navLinks.classList.toggle('active');
}

function toggleAnswer(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-link-list');
    navLinks.classList.toggle('active');
}

