// Imports
import { login,  logout } from './login'

import { getFilteredPlace } from './FIlter';

// Dom Elements
const addPlace = document.querySelector(".add-place");
const loginModal = document.querySelector(".login-place ");
const close = document.querySelectorAll(".close");
const tellMe = document.querySelector(".tell-me");

const loginbtn = document.querySelector('.login')
const logoutBtn = document.querySelector('.logout')

let placeIsVisible =false

if(loginModal){
  loginModal.addEventListener("click", (e) => {
    openLoginModal();
  });
}

if(addPlace){
  addPlace.addEventListener("click", (e) => {
    showAddPlaceModal();
  });
}

close.forEach(el => {
  el.addEventListener("click", () => {
    closeModal();
  });
})


tellMe.addEventListener("click", (e) => {
  e.preventDefault()
  const selectedType = document.querySelector('input[name="type"]:checked');
  const selectedTemperature = document.querySelector('input[name="temperature"]:checked');
  const selectedFlight = document.querySelector('input[name="flight"]:checked');

  const typeValue = selectedType ? selectedType.value : null;
  const temperatureValue = selectedTemperature ? selectedTemperature.value : null;
  const flightValue = selectedFlight ? selectedFlight.value : null;
  
  // console.log(typeValue, temperatureValue, flightValue)
  getFilteredPlace(typeValue, temperatureValue, flightValue)
  filteredPlace()
});

const openLoginModal = () => {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".login-modal").classList.add("active");
};

const showAddPlaceModal = () => {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".new-place").classList.remove("inactive");
};

const closeModal = () => {
  document.querySelector(".overlay").classList.remove("active");
  if(loginModal){
    document.querySelector(".login-modal").classList.remove("active");
  }
  document.querySelector(".new-place").classList.add("inactive");
};

loginbtn.addEventListener('click', e=> {
  e.preventDefault()
  const email =document.getElementById('email').value
  const password =document.getElementById('password').value
  login(email, password)
})

if(logoutBtn){
logoutBtn.addEventListener('click', e => {
  logout();
})
}

const playgif = () => {
  document.getElementsByClassName("plane-img")[0].style.display = "none";
  const gif = document.getElementsByClassName("gif")[0];
  gif.style.display = "block";
  setTimeout(() => {
    gif.style.display = "none";
  }, 5000);
};


const filteredPlace = () => {
    const place = document.querySelector('.text-wrapper')
    if(placeIsVisible === false){
        playgif()
        setTimeout(() => {
            place.classList.remove('inactive')
        }, 5000);
        place.classList.add('inactive')
    }
}



// 
// Get all item-filters

