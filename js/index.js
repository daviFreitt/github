let ano =+prompt("qual seu ano de nascimento?")
let data = new Date
let anoatual = data.getFullYear()
let idade = anoatual - ano
let nome =prompt("qual seu nome?")
let dados = confirm(`Você colocou corretamente seus dados? idade: ${idade} nome: ${nome}`)
if (dados == false){
 
    let tentativa = 0
    while (tentativa <= 3){
            tentativa ++
            alert(`voce errou seus dados e esta na tentativa de numero ${tentativa}  disponibilizaremos uma nova tentativa`)
            let ano =+prompt("qual seu ano de nascimento?")
            let nome =prompt("qual seu nome?")
            let dados = confirm(`Você colocou corretamente seus dados? idade: ${idade} nome: ${nome}`)
            if(tentativa == 3){
                alert("voce acabou suas tentativas")
                break
            }
    }
}


if (dados == true){
    alert("seus dados estão armazenados no sistema")
}
