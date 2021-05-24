/*
Case Sensitive = reconhecer letras maiusculas e minusculas

por Tag: getElementByTagnome()
por Id: getElementById()
por Nome:getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'nome valido'
        txtNome.style.color = 'green'
        nomeOK = true 
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.Value.indexOf('.') ==-1 ) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        emailOK = true 
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true 
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ('formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}