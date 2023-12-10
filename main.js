// 1-misol

// function ex1(arg ){
//     let sum = 1;
// for (const iterator of arg) {
//         if (iterator % 5 == 0 || iterator % 3 == 0) {
//             sum *= iterator;
//         }
//     }
//     return sum
// }

// console.log(ex1([1, 2, 3, 4, 5]));

// 3-misol

// function ex3(arg ){
//     let sum = [ ];
// for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             sum = sum + `${iterator}, `;
//         }
//     }
//     return sum
// }

// console.log(ex3([1, 2, 3, 4, 5]));

// 4-misol

// function ex4(arg ){
//     let sum = [ ];
// for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             sum++;
//         }
//     }
//     return sum
// }

// console.log(ex4([1, 2, 3, 4, 5]));

// 6-misol

// function ex6(arg){
//     let sum = 0;
//     let res = 0;
//     for (const iterator of arg) {
//         for (let i = 1; i <= iterator; i++){
//             if (iterator % i == 0) {
//                 sum++;
//             }
//             if (sum == 2){
//                 res++;
//             }
//         }


//     } 
//     return res
// }

// console.log(ex6([21, 42, 13, 14, 15, 16, 17]));

// 7-misol

// function ex7(arg ){
//     let sum = 1;
// for (const iterator of arg) {
//         if (iterator % 7 == 0 && iterator % 3 == 0) {
//             sum *= iterator;
//         }
//     }
//     return sum
// }

// console.log(ex7([21, 42, 13, 14, 15, 16, 17]));