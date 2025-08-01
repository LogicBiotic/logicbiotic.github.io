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
