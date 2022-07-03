const ementa = document.querySelectorAll(".ementa");
const optionsEmenta = document.querySelectorAll(".options li");

function viewEmenta(index) {
  optionsEmenta.forEach((option) => {
    option.classList.remove("active");
  });
  ementa.forEach((item) => {
    item.classList.remove("active");
  });
  ementa[index].classList.add("active");
  optionsEmenta[index].classList.add("active");
}

optionsEmenta.forEach((option, index) => {
  option.addEventListener("click", () => {
    viewEmenta(index);
  });
});

const sectionsEmenta = document.querySelectorAll(".ementa-section");
const btnEmenta = document.querySelector(".btn-proximo");
let contador = 0;

function trocaDeEmenta(item) {
  console.log(contador)
  contador++;
  if (contador > sectionsEmenta.length - 1) {
    contador = 0;
  }
  sectionsEmenta.forEach((section) => {
    section.classList.remove("active");
  });

  sectionsEmenta[contador].classList.add("active");
}

btnEmenta.addEventListener("click", trocaDeEmenta);
