function openMenu() {
    const nav = document.querySelector("nav")
    
    nav.classList.toggle("open")
}

let icon = document.getElementById("icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) icon.className = "bx bxs-moon" 
    else icon.className = "bx bxs-sun" 
}