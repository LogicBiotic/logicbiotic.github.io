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

// Resume link alert + redirect
const resumeLink = document.querySelector(".resume-alert-link");

if (resumeLink) {
    resumeLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Remove any existing alert
        const existingAlert = document.getElementById("resume-alert");
        if (existingAlert) existingAlert.remove();

        // Create alert box
        const alertBox = document.createElement("div");
        alertBox.id = "resume-alert";
        alertBox.innerText = "If you wish to download my resume, please contact me via e-mail.";
        Object.assign(alertBox.style, {
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#333",
            color: "#fff",
            padding: "15px 20px",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: "9999",
            opacity: "1",
            transition: "opacity 0.5s ease-in-out"
        });

        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.style.opacity = "0";
            setTimeout(() => {
                alertBox.remove();
                window.open("contact.html", "_blank");
            }, 500);
        }, 3000);
    });
}
