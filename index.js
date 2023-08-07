const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

botao1.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
});

botao2.addEventListener("click", () => {
  page2.style.display = "none";
  page1.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";
});

botao3.addEventListener("click", () => {
  page2.style.display = "none";
  page1.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
});

botao4.addEventListener("click", () => {
  window.location.href = "pagina2.html";
})