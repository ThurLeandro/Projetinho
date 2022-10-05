const botao = document.querySelector(".botao");
const botaoy = document.querySelector(".buttony");
const hidden = document.querySelector(".hidden");

botao.addEventListener('mouseover', mudarCor);
botaoy.addEventListener('click', press);
botao.addEventListener('mouseover', press);

function mudarCor(){
    botao.innerHTML = `
    <button class="buttonyj">Sim</button>
    `
}
function press(){
    hidden.innerHTML = `
    <img src="emojiamarelo.png" alt="yellow" class="img"></img>
    
    `
}
 