var change = 0;
var dinheiroInserido = 0;
var msg = "";
var outputElementY = document.getElementById("output-insides").getBoundingClientRect().top;

var doces = [
  {
    name: "A",
    price: 6.00
  },
  {
    name: "B",
    price: 7.00
  },
  {
    name: "C",
    price: 8.00
  }
];
  
var messageElement = document.getElementById("message");

var totalInserido = 0;

const um_real = 1;
const dois_reais = 2;
const cinco_reais = 5;

function getTotal() {
    var notas_um = Number(document.getElementById("um").value);
    var notas_dois = Number(document.getElementById("dois").value);
    var notas_cinco = Number(document.getElementById("cinco").value);

    if(notas_um > 0){
        notas_um = notas_um * um_real
    }    
    
    if(notas_dois > 0){
        notas_dois = notas_dois * dois_reais
    }

    if(notas_cinco > 0){
        notas_cinco = notas_cinco * cinco_reais
    }

    totalInserido = notas_um + notas_dois + notas_cinco
    return totalInserido.toFixed(2);
}

function valor(){
    dinheiroInserido = getTotal();
    document.getElementById("inserido").innerHTML = dinheiroInserido;
}

function limparValor(){
    dinheiroInserido = 0;
    document.getElementById("inserido").innerHTML = dinheiroInserido;
}

function limparForm(){
    document.getElementById("um").value = 0;
    document.getElementById("dois").value = 0;
    document.getElementById("cinco").value = 0;
}

function cancelar(){
    getTotal();

    if(totalInserido > 0){
      msg = `Transação cancelada. R$ ${totalInserido.toFixed(2)} de volta para sua carteira.`;

      limparForm();
      limparValor();

      messageElement.innerHTML = msg;
    } else if (totalInserido == 0) {
        msg = "Insira o dinheiro primeiro e selecione seu doce em seguida";
        messageElement.innerHTML = msg;
    }
}

function calcularChange(doceEscolhido) {
    var tempChange = 0;

    if(getTotal() != 0) {
        return (tempChange = (getTotal() - doceEscolhido.price).toFixed(2));
    }

    return tempChange.toFixed(2);
}

function animarElemento(doceEscolhido) {
    let elemento = document.getElementById(`doce-${doceEscolhido.name.toLowerCase()}`)
    let elementoOffSet = outputElementY - elemento.getBoundingClientRect().top - 18;
    elemento.style.transitionDuration = "2000ms"
    elemento.style.transform = `translateY(${elementoOffSet}px)`;
}

function dispensaDoce(doce) {
    messageElement.innerHTML = "";
    change = 0;

    let doceEscolhido = doces[doce];

    change = calcularChange(doceEscolhido);

    if(change < 0){
        msg = `Não é suficiente. R$ ${totalInserido.toFixed(2)} de volta para sua carteira.`;
    } else if (change > 0){
        msg = `${doceEscolhido.name} é o seu doce! E seu troco foi de R$ ${change}`;
        animarElemento(doceEscolhido);
    } else if (totalInserido == 0) {
        msg = "Por favor, insira uma nota para comprar seu doce!";
    } else if (change == 0) {
        msg = `${doceEscolhido.name} é o seu doce! Não há troco à ser devolvido.`;
        animarElemento(doceEscolhido);
    }

    totalInserido = 0;
    change = 0;
    limparForm();
    limparValor();
    messageElement.innerHTML = msg;
}
