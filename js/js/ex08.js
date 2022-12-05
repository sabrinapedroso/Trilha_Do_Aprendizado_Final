var tabuada, n, cont

n=parseInt(prompt("Insira um número: "))

if(n>0 || n<0){
    for(cont=0; cont<11; cont++){
        tabuada=n*cont
        document.write("<p>"+n+" x "+cont+" = "+tabuada+"</p>")
    }
}
else{
    document.write("<p>"+"Entrada inválida"+"</p>")
}
