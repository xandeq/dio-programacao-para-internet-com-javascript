function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //alert("Você clicou no botão!")
}

function redirecionar(){
    window;location.href = "http://www.google.com.br";
}

function passouOMouse(elemento){
    elemento.innerHTML = "Passou o mouse"
}

function tirouOMouse(elemento){
    elemento.innerHTML = "Tirou o mouse!";
}

function CarregaPagina(){
    alert('Carregou corretamente.')   
}

function MudaSelecao(elemento){
    console.log(elemento.value)
}