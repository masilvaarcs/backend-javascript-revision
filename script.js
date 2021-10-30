//Usando var - Pode ser utilizada a variável antes de ser declarada (é bom evitar)

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// var area;
// console.log(area);

//Usando let

// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;    
// }else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);


//Usando Const

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}
console.log(area);