var n1, n2, subtração

n1=prompt("Insira um valor:")
n2=prompt("Insira outro valor:")
subtração = parseInt(n1) - parseInt(n2)

if(subtração>0){
    alert("Resultado: "+subtração)
}
if(subtração<0){
    alert("A subtração resulta em número menor que zero.")
}
else{
    alert("Entrada de dados inválida!")
}
