array = ["Felipe", "Karine", "Sophia"];

//Metodo para listar a quantidade de itens no array
array2 = array.length;
document.write("<h4>Quantidade de elementos no array: " + array2 + "</h4>");

//Metodo para editar um item no array
array[0] = "Novo Item";
document.write("<br><h4>Item 0 do array editado: " + array + "</h4>");

// Metodo para adicionar item ao final do array
array.push("Felipe Marques");
document.write("<br><h4>Item adicionado ao final do array: " + array + "</h4>");

//Metodo para deletar ultimo item no array
array.pop();
document.write("<br><h4>Item no final do array deletado: " + array + "</h4>");

// Método concatenação de arrays
array3 = ["Array0", "Array1","Array2","Array3"]
array4 = array.concat(array3);
document.write("<br><h4>Array concatenado: " + array4 + "</h4>");

var array;
var array2;
var array3;
var array4;
