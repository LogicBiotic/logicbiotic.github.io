/*For cycling index main intro image*/
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.getElementById("profileImage");
    if (!imgElement) return; // nothing to do if element doesn’t exist

    const images = [
        "media/index/profile1.jpg",
        "media/index/profile2.jpg",
        "media/index/profile3.jpg"
    ];

    let index = 0;

    // Preload images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    setInterval(() => {
        imgElement.style.opacity = 0.35;

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.style.opacity = 1;
        }, 300);
    }, 4000);
});


/*Intro stuff*/
document.addEventListener("DOMContentLoaded", function () {
    // Redirect for Connect button
    const connect = document.getElementById("connect");
    if (connect) {
        connect.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    }

    // Dropdown toggle logic
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(button => {
        button.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent click from reaching document

            const parent = button.closest(".nav-item-with-dropdown");

            // Close all other open dropdowns
            document.querySelectorAll(".nav-item-with-dropdown").forEach(dropdown => {
                if (dropdown !== parent) {
                    dropdown.classList.remove("open");
                }
            });

            // Toggle current one
            parent.classList.toggle("open");
        });
    });

    // Close all dropdowns if clicking outside
    document.addEventListener("click", function (e) {
        document.querySelectorAll(".nav-item-with-dropdown").forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    });
});

/*Resume link alert + redirect*/
const resumeLink = document.querySelector(".resume-alert-link");
let resumeCooldown = false;

if (resumeLink) {
    resumeLink.style.cursor = "pointer"; // show clickable pointer

    resumeLink.addEventListener("click", function (event) {
        event.preventDefault();

        if (resumeCooldown) return; // cooldown active
        resumeCooldown = true;

        // Remove any existing alert
        const existingAlert = document.getElementById("resume-alert");
        if (existingAlert) existingAlert.remove();

        // Create alert box
        const alertBox = document.createElement("div");
        alertBox.id = "resume-alert";
        alertBox.innerText = "If you wish to download my resume, please contact me via e-mail.";

        // Style in JS
        Object.assign(alertBox.style, {
            position: "fixed",
            top: "5rem",
            background: "#333",
            color: "#fff",
            padding: "0.5rem 0.75rem",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            boxSizing: "border-box",
            zIndex: "9999",
            pointerEvents: "none",
            fontFamily: "sans-serif",
            fontSize: "0.85rem",
            lineHeight: "1.4",
            animation: "fadeInOut 3s ease forwards"
        });

        // Append first to measure width
        document.body.appendChild(alertBox);

        // Perfect horizontal centering
        const width = alertBox.offsetWidth;
        alertBox.style.left = `calc(50% - ${width / 2}px)`;

        // Remove alert after 3s and release cooldown
        setTimeout(() => {
            alertBox.remove();
            resumeCooldown = false;
            // Open contact page after alert disappears
            window.open("contact.html", "_blank");
        }, 3000);
    });
}

// Add fadeInOut keyframes (only once)
if (!document.getElementById("fadeInOutKeyframes")) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "fadeInOutKeyframes";
    styleSheet.innerText = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(-5px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-5px); }
    }`;
    document.head.appendChild(styleSheet);
}


/*Enterogermina Project here */
const campaignBtn = document.getElementById('campaignBtn');
if (campaignBtn) {
    campaignBtn.addEventListener('click', () => {
        window.open('https://www.facebook.com/EnterogerminaGutDefenseVN/videos/636043429227470/', '_blank');
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "media/index/enterogermina1.png",
        "media/index/enterogermina2.png",
        "media/index/enterogermina3.png",
        "media/index/enterogermina4.png",
        "media/index/enterogermina5.png"
    ];

    let index = 0;
    const imgElement = document.getElementById("enteroImage");

    if (imgElement) { // <-- wrap check
        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        setInterval(() => {
            imgElement.style.opacity = 0.35; // fade out

            setTimeout(() => {
                index = (index + 1) % images.length;
                imgElement.src = images[index];
                imgElement.style.opacity = 1; // fade in
            }, 300); // match transition duration
        }, 6000); // change every 6 seconds
    }
});


/*Thesis Feature here */
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "media/index/thesis1.png",
        "media/index/thesis2.png",
        "media/index/thesis3.png",
        "media/index/thesis4.png"
    ];

    let index = 0;
    const imgElement = document.getElementById("thesisImage");

    if (imgElement) { // <-- wrap check
        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        setInterval(() => {
            imgElement.style.opacity = 0.35; // fade out

            setTimeout(() => {
                index = (index + 1) % images.length;
                imgElement.src = images[index];
                imgElement.style.opacity = 1; // fade in
            }, 300); // match transition duration
        }, 6000); // change every 6 seconds
    }
});


const thesisBtn = document.getElementById("thesisBtn");
if (thesisBtn) {
    thesisBtn.addEventListener("click", function () {
        window.open("files/MendozaH_Thesis Manuscript FINAL SIGNED.pdf", "_blank");
    });
}


/*Buwen feature here*/
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "media/index/buwen1.png",
        "media/index/buwen2.png",
        "media/index/buwen3.png"
    ];

    let index = 0;
    const imgElement = document.getElementById("buwenImage");

    if (imgElement) { // <-- wrap check
        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        setInterval(() => {
            imgElement.style.opacity = 0.35; // fade out

            setTimeout(() => {
                index = (index + 1) % images.length;
                imgElement.src = images[index];
                imgElement.style.opacity = 1; // fade in
            }, 300); // match transition duration
        }, 6000); // change every 6 seconds
    }
});


const buwenBtn = document.getElementById("buwenBtn");
if (buwenBtn) {
    buwenBtn.addEventListener("click", function () {
        window.open("https://github.com/LogicBiotic/Buwen-Discord-Gacha-Bot", "_blank");
    });
}


const wittyPrompts = [
    "It ain't ready yet. Let. Me. Cook. 🍳",
    "Good things come to those who wait. Bad things come faster to those who don't. 😡",
    "im still figuring out how to make things work back here, pls wait 😭🥀",
    "nadelay din ako and im turning out great so pls w8 ⏳",
    "STOP PRESSING ME ISUSUMBONG KITA SA MAMA MO"
];

let onCooldown = false;

const addBuwenBtn = document.getElementById("addBuwenBtn");
if (addBuwenBtn) {
    addBuwenBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (onCooldown) return; // skip if still in cooldown
        onCooldown = true;

        const randomPrompt = wittyPrompts[Math.floor(Math.random() * wittyPrompts.length)];

        const alertBox = document.createElement("div");
        alertBox.className = "buwen-alert";
        alertBox.innerText = randomPrompt;

        document.body.appendChild(alertBox);

        // Position it centered above the button
        const btnRect = this.getBoundingClientRect();
        const gapAbove = 8; // px
        alertBox.style.left = `${btnRect.left + (btnRect.width - alertBox.offsetWidth) / 2 + window.scrollX}px`;
        alertBox.style.top = `${btnRect.top - alertBox.offsetHeight - gapAbove + window.scrollY}px`;

        // Remove after 3s and reset cooldown
        setTimeout(() => {
            alertBox.remove();
            onCooldown = false;
        }, 3000);
    });
}


/*Contact form change header each reload*/
document.addEventListener("DOMContentLoaded", () => {
    const headers = [
        "From Sprouts to Scripts",
        "From Roots to Runtime",
        "From Branches to Bytes",
        "From Seeds to Systems"
    ];

    const randomHeader = headers[Math.floor(Math.random() * headers.length)];
    const headerElement = document.getElementById("contact-header");
    if (headerElement) {
        headerElement.innerText = randomHeader;
    }
});

/* Contact form content sender */
function onSubmitContact(token) {
    const form = document.getElementById("contact-form");
    if (!form) return;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
    .then(res => res.json())
    .then(data => {
        showAlert("Thank you! Your message has been sent. Give me some time to go over it, please! 🎉", false);
        form.reset();

        // Reset reCAPTCHA v2 widget so user can submit again
        if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
        }
    })
    .catch(err => {
        showAlert("Something went wrong. Please try again. ❌", true);
        console.error(err);

        // Reset reCAPTCHA anyway so user can retry
        if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
        }
    });
}

/* Newsletter footer form */
function onSubmit(token) {
    const form = document.querySelector(".newsletter-form");
    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
    .then(res => res.json())
    .then(data => {
        showAlert("Thanks for signing up! 🎉", false);
        form.reset();

        if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
        }
    })
    .catch(err => {
        showAlert("Something went wrong. Please try again. ❌", true);
        console.error(err);

        if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
        }
    });
}

/* Show alert box (common) */
function showAlert(message, isError = false) {
    const existingAlert = document.getElementById("newsletter-alert");
    if (existingAlert) existingAlert.remove();

    const alertBox = document.createElement("div");
    alertBox.id = "newsletter-alert";
    alertBox.innerText = message;

    Object.assign(alertBox.style, {
        position: "fixed",
        top: "5rem",
        background: isError ? "#c0392b" : "#27ae60",
        color: "#fff",
        padding: "0.5rem 0.75rem",
        borderRadius: "5px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        zIndex: "9999",
        fontFamily: "sans-serif",
        fontSize: "0.85rem",
        lineHeight: "1.4",
        animation: "fadeInOut 3s ease forwards"
    });

    document.body.appendChild(alertBox);

    const width = alertBox.offsetWidth;
    alertBox.style.left = `calc(50% - ${width / 2}px)`;

    setTimeout(() => alertBox.remove(), 3000);
}




/*Logo easter egg*/
document.addEventListener("DOMContentLoaded", function () {
    const logoLink = document.getElementById("logoLink");
    let logoCooldown = false;

    const logoFlavors = [
        "How do I show that this is a premium logo? Me looking at the notorious fresnel shader: 👀",
        "Beep boop… I am a robot. Just kidding 🤖",
        "Click me again and I might tell you a secret 🤫",
        "FREE PALESTINE! 🕊️",
        "You clicked it… feeling special yet? 😏",
        "Welcome to the Nexus, visitor. Hope you enjoy your stay!",
        "Congratulations! You found the interactive logo easter egg 🥚",
        "This logo supposedly represents two coding chevrons (logic) intertwining into DNA (biotic)."
    ];

    if (logoLink) {
        // Make cursor indicate clickable
        logoLink.style.cursor = "pointer";

        logoLink.addEventListener("click", function () {
            if (logoCooldown) return;
            logoCooldown = true;

            // Remove any existing alert
            const existingAlert = document.getElementById("logo-alert");
            if (existingAlert) existingAlert.remove();

            // Pick a random flavor text
            const randomPrompt = logoFlavors[Math.floor(Math.random() * logoFlavors.length)];

            // Create alert box
            const alertBox = document.createElement("div");
            alertBox.id = "logo-alert";
            alertBox.innerText = randomPrompt;

            // Style in JS
            Object.assign(alertBox.style, {
                position: "fixed",
                top: "5rem",
                background: "#333",
                color: "#fff",
                padding: "0.5rem 0.75rem",
                borderRadius: "8px",
                fontFamily: "sans-serif",
                fontSize: "0.85rem",
                maxWidth: "40rem",
                lineHeight: "1.4",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                boxSizing: "border-box",
                zIndex: "9999",
                pointerEvents: "none",
                animation: "fadeInOut 3s ease forwards"
            });

            // Append first to measure width
            document.body.appendChild(alertBox);

            // Center based on actual width
            const width = alertBox.offsetWidth;
            alertBox.style.left = `calc(50% - ${width / 2}px)`;

            // Remove after 3 seconds and release cooldown
            setTimeout(() => {
                alertBox.remove();
                logoCooldown = false;
            }, 3000);
        });
    }
});


// Add fadeInOut keyframes if not already present
if (!document.getElementById("fadeInOutKeyframes")) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "fadeInOutKeyframes";
    styleSheet.innerText = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(-5px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-5px); }
    }`;
    document.head.appendChild(styleSheet);
}