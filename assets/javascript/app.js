//fetch components for each page

async function loadComponent(id, file){
    try{
        const res = await fetch(file);
        if (!res.ok) {
            throw new Error(`Failed to fetch ${file}: ${res.statusText}`);
        }
        const component = await res.text();
        document.getElementById(id).innerHTML = component;

        activateHamburgerMenu();
    } catch (error) {
        console.error('There was an error fetching the navbar', error);
    }
}

//Event listener for loading components

document.addEventListener("DOMContentLoaded", () => {
    loadComponent('footer-div', '../components/footer.html')
    loadComponent('navbar', '../../components/navbar.html')
})


//Hamburger activation
function activateHamburgerMenu(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-list");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll("nav-item").forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
}