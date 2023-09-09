const navBarLink = document.getElementsByClassName("navbar-links")[0]
const menuIcon = document.getElementsByClassName("menu-icon")[0]
const element = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
const userName = document.querySelector('[data-testid="Clarefausty"]');
const trackName = document.querySelector('[data-testid="myTrack"]');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();
const currentDay = now.getDay()


menuIcon.addEventListener('click', function(){
    navBarLink.classList.toggle('active')
})
element.innerHTML = days[currentDay]
currentTime.innerHTML = now.getTime()
userName.innerHTML = "Achilonu Chinwendu Faustina"
trackName.innerHTML = "Frontend Development"



