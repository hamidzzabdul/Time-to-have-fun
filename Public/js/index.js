const addPlace = document.querySelector(".add-place");
const close = document.querySelector(".close");
const tellMe = document.querySelector(".tell-me");

console.log('hello world')

let placeIsVisible =false

addPlace.addEventListener("click", (e) => {
  openModal();
});

// close.addEventListener("click", () => {
//   closeModal();
// });

tellMe.addEventListener("click", (e) => {
    console.log(e.target)   
  filteredPlace()
});

const openModal = () => {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".login-modal").classList.add("active");
};
const closeModal = () => {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".login-modal").classList.remove("active");
};


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