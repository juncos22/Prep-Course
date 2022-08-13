// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = []
  for (const key in objeto) {
    matriz.push([key, objeto[key]])
  }
  return matriz
}


function numberOfCharacters(string = '') {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var strArray = string.split('')
  var strObj = {}
  for (let i = 0; i < strArray.length; i++) {
    var letra = strArray[i]
    var c = 0
    for (let j = 0; j < strArray.length; j++) {
      if (letra === strArray[j]) {
        c++
      }
    }
    strObj[strArray[i]] = c
  }
  return strObj
}


function capToFront(s = "") {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var strArray = s.split('')
  var nuevoArray = []
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].toUpperCase() === strArray[i]) {
      nuevoArray.push(strArray[i])
    }
  }
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].toLowerCase() === strArray[i]) {
      nuevoArray.push(strArray[i])
    }
  }
  return nuevoArray.join('')
}


function asAmirror(str = "") {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strArray = str.split(' ')
  var nuevoArray = []
  strArray.map(s => {
    nuevoArray.push(s.split('').reverse().join(''))
  })
  return nuevoArray.join(' ')
}


function capicua(numero = 0) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if (numero.toString().split('').reverse().join('') === numero.toString()) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena = "") {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena.split('').map(s => {
    if (s === 'a' || s === 'b' || s === 'c') {
      cadena = cadena.replace(s, '')
    }
  })
  return cadena
}


function sortArray(arr = ["You", "are", "beautiful", "looking"]) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var aux
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i); j++) {
      if (arr[j].length > arr[j + 1].length) {
        aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux
      }
    }
  }
  return arr
}


function buscoInterseccion(arreglo1 = [4, 2, 3], arreglo2 = [1, 3, 4]) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = []

  arreglo1.forEach(n1 => {
    var repetido = false
    arreglo2.forEach(n2 => {
      if (n1 === n2) {
        repetido = true
        return
      }
    })
    if (repetido) {
      arreglo3.push(n1)
    }
  })
  return arreglo3
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

