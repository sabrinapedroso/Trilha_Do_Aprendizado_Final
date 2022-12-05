var idade, nome, cpf, aux, n1, n2, n3, aux2

alert("Exercício 01")

parseInt(n1)=prompt("Insira um número: ")
aux = n1 % 2
if(aux=0){
    alert("O número é par")
}
if(aux>0 || aux<0){
    alert("O número é ímpar")
}
else{
    alert("Entrada inválida de dados")
}

alert("Exercício 02")
parseInt(n3)=prompt("Insira um número: ")
aux2 = n3 % 3
if(aux2=0){
    alert("O número é divisível por 3")
}
else{
    alert("Não é divisível por 3")
}

aux2=n3%7
if(aux2=0){
    alert("O número é divisível por 7")
}
else{
    alert("Não é divisível por 7.")
}

alert("Exercício 03")
pasrseString(nome)=prompt("Insira o nome:")
parseInt(idade)=prompt("Insira a idade:")

parseInt(aux)=18-idade
if(aux<=0){
    alert("Bem vindo "+nome+"! Você tem "+idade+" anos.")
    parseString(cpf)=prompt("Insira o CPF: ")
    alert("Nome: "+nome+"Idade: "+idade+"CPF: "+cpf)
}
if(aux>0){
    alert("Bem vindo "+nome+"! Você tem "+idade+" anos. O usuário é menor de idade.")
}
else{
    alert("Entrada inválida de dados")
}