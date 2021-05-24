"use strict";

/*
Case Sensitive = reconhecer letras maiusculas e minusculas

por Tag: getElementByTagnome()
por Id: getElementById()
por Nome:getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
var nome = window.document.getElementById('nome');
var email = document.querySelector('#email');
var assunto = document.querySelector('#assunto');
nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
  var txt = document.querySelector('#txtNome');

  if (nome.Value.length < 3) {
    txt.innerHTML = 'nome invalido';
  } else {
    txt.innerHTML = 'nome valido';
  }
}
//# sourceMappingURL=script.dev.js.map
