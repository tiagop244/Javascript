let matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4]
];
const Matriz = matriz.length;
console.log("Elementos da diagonal principal:");
for (let n = 0; n < Matriz; n++) {
    console.log(matriz[n][n]);
}
