// As Variáveis armazenam dados que podem ser definidos, atualizados e recuperados sempre que necessário.
// Os Valores atibuídos a uma variável têm um tipo.
// Tipos Disponíveis em JavaScript
    //number
    //string
    //boolean
    //function
    //object

    //undefined
    //null
    //arrays
    //datas
    //expressões regulares

//javaScript não é Fortemente Tipada (não obrigatorio definir o tipo da variável em sua declaração.)
//Há "Versoes" que são Fortemente Tipadas
    //ECMAScript
    //TypeScript

//Exemplo de Variáveis
var num = 1;            //      {1}
num = 3;                //      {2}
num = 'Hello';          //      {2}
var price = 1.5;        //      {3}
var myName = 'Packt';   //      {4}
var trueValue = true;   //      {5}
var nullVar = null;     //      {6}
var und;                //      {7}

//      {1} - declaração de variável do tipo number
//      {2} - atualização (Por não ser fortemente tipada, poderiamos atribuir inclusive um valor de string)
//      {2.1} - atualização (Por não ser fortemente tipada, poderiamos atribuir inclusive um valor de string) *** não é uma boa prática
//      {3} - Declaração de um float
//      {4} - Declaração de uma Sring
//      {5} - Declaração de um bolean
//      {6} - Declaração de um null
//      {7} - Declaração de um undefined

//Apresentando a variável
alert(num) //janela
// Mostrar o valor da variável em um parágrafo
document.getElementById("resultado").innerText = num;

num = 'Hello In write';
// Escrever o valor da variável diretamente no documento
document.write(num);

//onsole.log apenas para utilizadores da ferramenta de depuração (Google Developer Tools ou firebug)
console.log("Script JavaScript foi chamado com sucesso!");
