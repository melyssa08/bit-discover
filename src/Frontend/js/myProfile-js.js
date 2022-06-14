// variável que pega todos os botões que ficam em formato de array
var botao = document.querySelectorAll(".myProfile-button-tag");
for (item of botao) {
  item.className = "myProfile-button-tag false";
}
// loop que passa por cada botão e adciona propriedades em cada um deles
// visto que quando o evento é disparado o botão que foi clicado se ve com propriedades novas
for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function (e) {
    if (botao[i].className == "myProfile-button-tag false") {
      e.preventDefault();
      botao[i].style.backgroundColor = "#530084";
      botao[i].style.color = "#FFFFFF";
      botao[i].className = "myProfile-button-tag true";
    } else if (botao[i].className == "myProfile-button-tag true") {
      e.preventDefault();
      botao[i].style.borderStyle = "solid";
      botao[i].style.borderStyle = "#530084";
      botao[i].style.backgroundColor = "#FFFFFF";
      botao[i].style.color = "#530084";
      botao[i].className = "myProfile-button-tag false";
    }
  });
}


function pencilbutton() {
  var inputs = document.querySelectorAll("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false
    inputs[i].classList.remove("myProfile-disabled")
  }
}