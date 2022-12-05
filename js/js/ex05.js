var n1, n2

n1 = parseInt(prompt("Insira um valor: "))
n2 = parseInt(prompt("Insira outro valor: "))

if(n1<n2){
    alert(n1+" é menor que "+n2)
}
else if(n1>n2){
        alert(n1+" é maior que "+n2)
}
else if(n1=n2){
    alert(n1+ " é igual a "+n2)
}
else{
    alert("Entrada inválida de dados.")
}