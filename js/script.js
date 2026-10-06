// ============================================================
// EAGLE SOUND STUDIOS
// MAIN JAVASCRIPT
// ============================================================


// ============================================================
// 1. MOBILE NAVIGATION
// ============================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close the menu when a link is clicked
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}


// ============================================================
// 2. HEADER SCROLL EFFECT
// ============================================================

const header = document.getElementById("header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });
}


// ============================================================
// 3. ARTIST APPLICATION FORM
// ============================================================

const applyButton = document.getElementById("applyButton");
const applicationForm = document.getElementById("applicationForm");

if (applyButton && applicationForm) {

    applyButton.addEventListener("click", function () {

        // Show/hide the application form
        if (applicationForm.style.display === "none" ||
            applicationForm.style.display === "") {

            applicationForm.style.display = "block";

            applyButton.textContent = "Close Application";

            // Scroll to the form
            applicationForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        } else {

            applicationForm.style.display = "none";

            applyButton.textContent = "Apply Now";
        }

    });
}


// ============================================================
// 4. ARTIST GENRE SELECTION
// ============================================================

const genreTags = document.querySelectorAll(".genre-tag");
const otherGenreContainer = document.getElementById("otherGenreContainer");
const otherGenre = document.getElementById("otherGenre");

genreTags.forEach(function (tag) {

    tag.addEventListener("click", function () {

        // Count currently selected genres
        const selectedGenres =
            document.querySelectorAll(".genre-tag.selected");

        // If this genre is already selected, remove it
        if (tag.classList.contains("selected")) {

            tag.classList.remove("selected");

        }

        // Otherwise select it
        else {

            // Maximum of 5 genres
            if (selectedGenres.length >= 5) {

                alert("You can select a maximum of 5 genres.");
                return;
            }

            tag.classList.add("selected");
        }


        // Check whether "Other" is selected
        if (tag.dataset.value === "Other") {

            if (tag.classList.contains("selected")) {

                otherGenreContainer.style.display = "block";

            } else {

                otherGenreContainer.style.display = "none";
                otherGenre.value = "";
            }
        }

    });

});


// ============================================================
// 5. ARTIST APPLICATION VALIDATION
// ============================================================

const artistName = document.getElementById("artistName");
const governmentName = document.getElementById("governmentName");
const artistEmail = document.getElementById("artistEmail");
const artistPhone = document.getElementById("artistPhone");
const artistStory = document.getElementById("artistStory");
const audioSamples = document.getElementById("audioSamples");
const artistLink = document.getElementById("artistLink");
const successMessage = document.getElementById("successMessage");

if (applicationForm) {

    applicationForm.addEventListener("submit", function (event) {

        // Stop the browser from actually submitting the form
        event.preventDefault();


        // Get selected genres
        const selectedGenres =
            document.querySelectorAll(".genre-tag.selected");


        // Check required fields
        if (
            !artistName.value.trim() ||
            !governmentName.value.trim() ||
            !artistEmail.value.trim() ||
            !artistPhone.value.trim() ||
            !artistStory.value.trim()
        ) {

            alert("Please fill in all required fields.");
            return;
        }


        // Check email
        if (!artistEmail.validity.valid) {

            alert("Please enter a valid email address.");
            return;
        }


        // Check genres
        if (selectedGenres.length === 0) {

            alert("Please select at least one genre.");
            return;
        }


        // Check audio files
        if (!audioSamples.files ||
            audioSamples.files.length < 2 ||
            audioSamples.files.length > 3) {

            alert("Please upload 2 to 3 audio samples.");
            return;
        }


        // Everything passed
        successMessage.style.display = "block";

        successMessage.textContent =
            "Thank you for applying. Your artist application has been received.";


        // Scroll to success message
        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


        // Clear form
        applicationForm.reset();


        // Remove selected genres
        genreTags.forEach(function (tag) {
            tag.classList.remove("selected");
        });


        // Hide Other genre field
        if (otherGenreContainer) {
            otherGenreContainer.style.display = "none";
        }

    });

}


// ============================================================
// 6. ABOUT PAGE CAROUSEL
// ============================================================

const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (
    carouselTrack &&
    carouselDots &&
    prevBtn &&
    nextBtn
) {

    const slides = carouselTrack.children;
    let currentSlide = 0;


    // Create dots
    for (let i = 0; i < slides.length; i++) {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        if (i === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", function () {

            currentSlide = i;
            updateCarousel();

        });

        carouselDots.appendChild(dot);
    }


    function updateCarousel() {

        // Move carousel
        carouselTrack.style.transform =
            "translateX(-" + (currentSlide * 100) + "%)";


        // Update dots
        const dots =
            carouselDots.querySelectorAll(".carousel-dot");

        dots.forEach(function (dot, index) {

            if (index === currentSlide) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

        });
    }


    // Previous button
    prevBtn.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        updateCarousel();

    });


    // Next button
    nextBtn.addEventListener("click", function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        updateCarousel();

    });

}


// ============================================================
// 7. BOOKING SERVICE SELECTION
// ============================================================

const serviceOptions =
    document.querySelectorAll(".service-option");

serviceOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        // Remove selection from all services
        serviceOptions.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Select clicked service
        option.classList.add("selected");

    });

});


// ============================================================
// 8. BOOKING SESSION SELECTION
// ============================================================

const sessionOptions =
    document.querySelectorAll(".session-option");

sessionOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        // Remove selection from all sessions
        sessionOptions.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Select clicked session
        option.classList.add("selected");

    });

});


// ============================================================
// 9. BOOKING DATE
// ============================================================

const bookingDate =
    document.getElementById("bookingDate");

if (bookingDate) {

    // Get today's date
    const today = new Date();

    // Convert to YYYY-MM-DD
    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");

    const todayString =
        year + "-" + month + "-" + day;


    // Prevent selecting dates in the past
    bookingDate.min = todayString;
}


// ============================================================
// 10. BOOKING FORM
// ============================================================

const bookingForm =
    document.getElementById("bookingForm");

const bookingSuccess =
    document.getElementById("bookingSuccess");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Find selected service
        const selectedService =
            document.querySelector(".service-option.selected");


        // Find selected session
        const selectedSession =
            document.querySelector(".session-option.selected");


        // Make sure a service was selected
        if (!selectedService) {

            alert("Please select a service.");
            return;
        }


        // Make sure a session was selected
        if (!selectedSession) {

            alert("Please select a session type.");
            return;
        }


        // Check normal required fields
        const requiredFields =
            bookingForm.querySelectorAll("[required]");

        for (let i = 0; i < requiredFields.length; i++) {

            if (!requiredFields[i].value.trim()) {

                alert("Please complete all required fields.");
                return;
            }
        }


        // Show success
        if (bookingSuccess) {

            bookingSuccess.style.display = "block";

            bookingSuccess.textContent =
                "Your booking request has been received. Eagle Sound Studios will contact you to confirm the details.";

            bookingSuccess.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


// ============================================================
// 11. FAQ
// ============================================================

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    item.addEventListener("click", function () {

        // Toggle the clicked FAQ
        item.classList.toggle("active");

    });

});


// ============================================================
// 12. MEMBERSHIP FORM
// ============================================================

const membershipForm =
    document.getElementById("membershipForm");

const membershipSuccess =
    document.getElementById("membershipSuccess");

if (membershipForm) {

    membershipForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Check required fields
        const requiredFields =
            membershipForm.querySelectorAll("[required]");

        for (let i = 0; i < requiredFields.length; i++) {

            if (!requiredFields[i].value.trim()) {

                alert("Please complete all required fields.");
                return;
            }
        }


        // Show success
        if (membershipSuccess) {

            membershipSuccess.style.display = "block";

            membershipSuccess.textContent =
                "Thank you. Your membership request has been received.";

            membershipSuccess.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


// ============================================================
// 13. NEWSLETTER
// ============================================================

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterSuccess =
    document.getElementById("newsletterSuccess");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            newsletterForm.querySelector('input[type="email"]');


        if (!email || !email.validity.valid) {

            alert("Please enter a valid email address.");
            return;
        }


        if (newsletterSuccess) {

            newsletterSuccess.style.display = "block";

            newsletterSuccess.textContent =
                "You're subscribed. Thank you.";

        }


        newsletterForm.reset();

    });

}


// ============================================================
// END OF EAGLE SOUND STUDIOS JAVASCRIPT
// ============================================================