let navMenu = document.querySelector(".nav-menu");

document.querySelectorAll(".bx").forEach((i) => {
    i.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("id");

        if (id === "show-menu") {
            navMenu.classList.add("show");
        } 
        
        if (id === "hide-menu") {
            navMenu.classList.remove("show");
        } 
    })
})