var backdrop = document.querySelector(".backdrop"); //select backdrop class
var modal = document.querySelector(".modal"); // select modal
var closeModal = document.querySelector(".modal__action--negative");
var choosePlan = document.querySelectorAll(".plan button"); //select all buttons nested inside plan class
var hamBurgerMenu = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

//loop throuh button to add event listener for a click and set modal and backdrop to block
choosePlan.forEach(item => {
  item.addEventListener("click", function() {
    //add class open
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});

//remove backdrop on click
backdrop.addEventListener("click", function() {
  //remove side menu
  mobileNav.classList.remove("open");
  //remove backdrop and modal
  handleCloseModal();
});

if (closeModal) {
  //remove modal on click
  closeModal.addEventListener("click", handleCloseModal);
}

//show side menu
hamBurgerMenu.addEventListener("click", function() {
  //remove class
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

function handleCloseModal() {
  //remove class
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
}
