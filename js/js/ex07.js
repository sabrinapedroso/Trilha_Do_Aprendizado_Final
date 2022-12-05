var cont, resposta

cont=0

while(cont<5){
    alert("Como deixar o usuário louco com while em "+cont)
    cont++
}

for(cont=0; cont<5; cont++){
    alert("Muito laço de repetição, tipo muito mesmo. For "+cont)
}

do{
    resposta=prompt("Vai avaliar o site em cinco estrelas?")
}
while(resposta=="não")