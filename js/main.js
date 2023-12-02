var elModal = document.querySelector(".modal");

var elModalShadow = document.querySelector(".modal__shadow");

function openModal() {
  elModal.classList.add("modal__open");
  elModalShadow.style.display = "block";
}
function closeModal() {
  elModal.classList.remove("modal__open");
  elModalShadow.style.display = "none";
}
