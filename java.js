//Miguel Isaac Vasconcelos Gomes 3°C 24/08/2025
let fonteAtual = 1;


document.getElementById("aumentar-fonte").addEventListener("click", () => {
  fonteAtual += 0.1;
  document.body.style.fontSize = `${fonteAtual}rem`;
});


document.getElementById("diminuir-fonte").addEventListener("click", () => {
  fonteAtual = Math.max(0.8, fonteAtual - 0.1);
  document.body.style.fontSize = `${fonteAtual}rem`;
});


document.getElementById("alterna-contraste").addEventListener("click", () => {
  document.body.classList.toggle("modo-contraste");
});
