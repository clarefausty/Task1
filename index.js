const navBarLink = document.getElementsByClassName("navbar-links")[0]
const menuIcon = document.getElementsByClassName("menu-icon")[0]

menuIcon.addEventListener('click', function(){
    navBarLink.classList.toggle('active')
})