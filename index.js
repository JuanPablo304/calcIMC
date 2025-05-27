function alturas()   {
    return parseFloat (document.getElementById("altura").value);
}
function pesos()    {
    return parseFloat  (document.getElementById("peso").value);
}
function imc()  {
    const peso = pesos()
    const altura = alturas()

    var indice = peso/(altura*altura);
        if (indice<18.5) {
            return document.getElementById("resultado").innerHTML = "<br>Seu IMC é de: "+ indice.toFixed(1)+"<br>Você está abaixo do peso";
        }
        else if (indice>=18.5 && indice<=24.9){
            return document.getElementById("resultado").innerHTML = "<br>Seu IMC é de: "+ indice.toFixed(1)+"<br>Você está no peso ideal";          
        }
        else
            return document.getElementById("resultado").innerHTML = "<br>Seu IMC é de: "+ indice.toFixed(1)+"<br>Você está acima do peso";          
       
}