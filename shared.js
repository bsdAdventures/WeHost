var backdrop = document.querySelector(".backdrop"); //select backdrop class
var modal = document.querySelector(".modal"); // select modal
var closeModal = document.querySelector(".modal__action--negative");
var choosePlan = document.querySelectorAll(".plan button"); //select all buttons nested inside plan class

//loop throuh button to add event listener for a click and set modal and backdrop to block
choosePlan.forEach(item => {
  item.addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

//remove backdrop on click
backdrop.addEventListener("click", handleCloseModal);
//remove modal on click
closeModal.addEventListener("click", handleCloseModal);

function handleCloseModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
