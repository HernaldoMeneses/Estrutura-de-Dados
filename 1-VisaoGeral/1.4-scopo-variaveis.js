//      Escopo - Local de acessibilidade de uma variável no algorítimo.
//          Escopo de função - mesma ideia.

// Variáveis Locais e globais
var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local'
    return myVariable;
}

function myOtherFunction() {
    var myOtherVariabel = 'local'
    return myOtherVariabel;
}

document.write("<br>");             
document.write(myVariable);             // {1}
document.write("<br>");
document.write(myFunction());           // {2}
document.write("<br>");
document.write(myOtherVariable);        // {3}
document.write("<br>");
document.write(myOtherFunction());      // {4}
document.write("<br>");
document.write(myOtherVariable);        // {5}

// {1} - Exibirá global 
// {2} - Exibirá local - in function only
// {3} - Exibirá global
// {4} - Exibirá local - in function only
// {4} - Exibirá local - pois alterado em {4}