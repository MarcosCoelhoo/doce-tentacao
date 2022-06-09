const ementa = document.querySelectorAll(".ementa");
const optionsEmenta = document.querySelectorAll(".options li");

function viewEmenta(index) {
  optionsEmenta.forEach((option) => {
      option.classList.remove("active");
  });
  ementa.forEach((item) => {
    item.classList.remove('active')
  })
  ementa[index].classList.add("active");
  optionsEmenta[index].classList.add("active");
}

optionsEmenta.forEach((option, index) => {
  option.addEventListener("click", () => {
    viewEmenta(index)
  });
});
