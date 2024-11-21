function  sumar(){
    let valor1= document.getElementById("numero").value;
    let valor2= document.getElementById("numeroDos").value;
    let ResultadoTotal= document.getElementById("resultado");
    let ResultadoSuma= parseFloat(valor1)+parseFloat(valor2);
   
if(valor1=="" || valor2== ""){
    alert("Debes escribir un numero")
}
else{
    resultado.innerHTML="la suma es: " + ResultadoSuma;
}

}
