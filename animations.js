// Animation du header
gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// Sélection des slides et du texte
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Fonction pour afficher le slide actif
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            gsap.to(slide, { opacity: 1, duration: 1 });
            gsap.from(".slide h2", { x: -100, opacity: 0, duration: 1, ease: "power2.out" });
            gsap.from(".slide p", { x: 100, opacity: 0, duration: 1, ease: "power2.out" });
            gsap.from(".slide a", { y: 50, opacity: 0, duration: 1, ease: "power2.out" });

            slide.classList.add("active");
        } else {
            gsap.to(slide, { opacity: 0, duration: 1 });
            gsap.to(".slide h2", { x: 0, opacity: 1, duration: 1 });
            gsap.to(".slide p", { x: 0, opacity: 1, duration: 1 });
            gsap.to(".slide a", { y: 0, opacity: 1, duration: 1 });
            slide.classList.remove("active");
        }
    });
}


// Change de slide toutes les 4 secondes
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);


// Lancer le premier slide
showSlide(currentSlide);


gsap.utils.toArray(".product").forEach((product, index) => {
    let direction = index % 2 === 0 ? "-200%" : "200%";

    gsap.fromTo(product,
        { x: direction, opacity: 0 }, // Départ
        {
            x: "0%",
            opacity: 1,
            duration: 0.4,
            ease: "power1.inOut",

            scrollTrigger: {
                trigger: product,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        }
    );
});

// Animation de l'image grande dans "Our Selection"
gsap.from(".selection-image img", {
    scale: 1.4,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".selection-image",
        start: "top 80%"
    }
});

// Effet parallax sur l'image de la sélection
gsap.to(".selection-image img", {
    yPercent: -30, // Déplacement en parallax
    ease: "none",
    scrollTrigger: {
        trigger: ".selection-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Parallax fluide
    }
});

// Animation du texte quand il arrive à mi-hauteur de l'image
gsap.from(".selection-texte", {
    opacity: 0,
    y: 10, // Descend légèrement avant de se positionner
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".selection-container",
        start: "top 10%", // Déclenche à mi-hauteur

        toggleActions: "play none none none"
    }

});

// Animation du texte quand il arrive à mi-hauteur de l'image
gsap.from(".selection-texte p", {
    opacity: 0,
    y: 100, // Descend légèrement avant de se positionner
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".selection-container",
        start: "top 10%", // Déclenche à mi-hauteur

        toggleActios: "play none none none"
    }

});

// Animation du texte quand il arrive à mi-hauteur de l'image
gsap.from(".selection-texte h3", {
    opacity: 0,
    x: 1000, // Descend légèrement avant de se positionner
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".selection-container",
        start: "top 10%", // Déclenche à mi-hauteur

        toggleActios: "play none none none"
    }

});

// Animation du texte quand il arrive à mi-hauteur de l'image
gsap.from(".selection-texte h4", {
    opacity: 0,
    x: -100, // Descend légèrement avant de se positionner
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".selection-image",
        start: "top 90%", // Déclenche à mi-hauteur
        toggleActios: "play none none none"
    }

});

//Newsletter animation
// Animation d'entrée de la newsletter
gsap.from(".newsletter", {
    opacity: 0,
    y: 100, // Glisse depuis le bas
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".newsletter",
        start: "top 100%",
        toggleActions: "play none none none"
    }
});




// Animation du footer
gsap.from("footer", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 100%"
    }
});

// Animation des icônes sociales dans le footer
gsap.from(".social-icons img", {
    scale: 0,
    opacity: 0,
    duration: 3,
    stagger: 0.1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "footer",
        start: "top 100%"
    }
});


