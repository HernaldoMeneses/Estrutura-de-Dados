//      Operadores
//          atitiméticos
//          atribuição
//          comparação
//          lógicos
//          bit a bit (biwise)
//          unários

var num = 0; // {1}
document.write("<br>");             
document.write('var num = 0     :   ' + (num));
num = num + 2; // incrementa 2
document.write("<br>");             
document.write('num = num + 2   :   ' + (num));
num = num * 2;
document.write("<br>");             
document.write('num = num * 2   :   ' + (num));
num = num / 2;
document.write("<br>");             
document.write('num = num / 2   :   ' + (num));
num++; // incrementa com ela mesma
document.write("<br>");             
document.write('num++   :   ' + (num));
num--; // decrementa
document.write("<br>");             
document.write('num--   :   ' + (num));
num += 1; // incrementa 1
document.write("<br>");             
document.write('num += 1   :   ' + (num));
num -= 2; // decrementa 2
document.write("<br>");             
document.write('num -= 2  :   ' + (num));
num *= 2; // dobra 2
document.write("<br>");             
document.write('num *= 2   :   ' + (num));
num /= 2; // divide 2
document.write("<br>");             
document.write('num /= 2   :   ' + (num));
num %= 3; //
document.write("<br>");             
document.write('num %= 3   :   ' + (num));

document.write("<br>"); 


num = 1;
document.write("<br>");             
document.write('num == 1        :  ' + (num == 1));
document.write("<br>");   
document.write('num === 1       : ' + (num === 1));
document.write("<br>");   
document.write('num != 1        :  ' + (num != 1));
document.write("<br>");   
document.write('num > 1         :   ' + (num > 1));
document.write("<br>");   
document.write('num < 1         :   ' + (num < 1));
document.write("<br>");   
document.write('num >= 1        :  ' + (num >= 1));
document.write("<br>");   
document.write('num <= 1        :  ' + (num <= 1));  

document.write("<br>"); 

document.write("<br>");   
document.write('true && false        :  ' + (true && false));
document.write("<br>");   
document.write('true || false        :  ' + (true || false));
document.write("<br>");   
document.write('!true        :  ' + (!true));


document.write("<br>"); 

document.write("<br>");
document.write('5 & 1       :  ' + (5 & 1)); // E
document.write('5 | 1       :  ' + (5 | 1)); // ou
document.write('~5      :  ' + (~5)); // Negação
document.write('5^1     :  ' + (5^1)); // Ou Exclusivo (Xor)
document.write('5<<1     :  ' + (5<<1)); //Delocamento para a esquerda (left shift)
document.write('5>>1     :  ' + (5>>1)); //Deslocamento para direita (right shift)

document.write("<br>"); 

document.write("<br>");
document.write('typeof num      :  ' + (typeof num));
document.write("<br>"); 
document.write('typeof Packt      :  ' + (typeof 'Packt'));
document.write("<br>"); 
document.write('typeof true      :  ' + (typeof true));
document.write("<br>"); 
document.write('typeof [1,2,3]      :  ' + (typeof [1,2,3]));
document.write("<br>"); 
document.write('typeof {name:John}      :  ' + (typeof {name:'John'}));
document.write("<br>"); 

document.write("<br>"); 

var primitivos = ['null', 'undefined', 'string', 'number', 'boolean', 'symbol'];
var objetos = ['funções', 'arrays', 'ecpressões regulares'];
var derivados = [objetos];
var JS_DadosType = [primitivos, derivados];

document.write("<br>");
document.write('Tipos de dados JavaScripts      :  ' + (JS_DadosType));
