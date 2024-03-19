function Calcula (){
    let nota1 = document.getElementById("nota1").value;

    let nota2 = document.getElementById("nota2").value;

    let nota3 = document.getElementById("nota3").value;

   let divisio = ((nota1 + nota2 + nota3)/3).toFixed(3)

    document.getElementById("texto").innerHTML = 'El total de la nota es {divisio}'
}