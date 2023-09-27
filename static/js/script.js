document.addEventListener("DOMContentLoaded", function () {
    // Set navbar active item
    setTimeout(() => {
        document.querySelectorAll(`a[href="${location.pathname}"].nav-link`).forEach(a => {
            a.classList.add("active")
            a.setAttribute("aria-current", true)
        })
    }, 350)
})