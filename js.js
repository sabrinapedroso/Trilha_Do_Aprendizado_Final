function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    
    if(nome.value="" && nome.value.indexOf("")!=-1){
    if(email.value.indexOf("@")!=-1){
        alert(nome.value+" Agradecemos o seu contato!")
    }
        else{
        alert("Digite um email valido")
        ok=false
    }
    }
    else{
    alert("Preencha o seu nome completo")
    ok=false
    }
    }