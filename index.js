// 1.1
// const numArray = [1,2,2,2,3,4,5,5,7];
// // const numArray = [1,1,2];

// function filterUnique(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(filterUnique(numArray));




// 2.1
// const numArray = [1, 2, 3];
// // const numArray = [1, 1, 2];

// const cubizer = numArray.map((item) => {
//     return item*item*item;
// });

// console.log(cubizer);



// 2.2
// const numArray = [1, 2, 3];
// // const numArray = [1, 1, 2];

// const cubizer = (arr) => {
//     const result=[];

//     for (let i = 0; i < arr.length; i++){
//         result.push(arr[i]*arr[i]*arr[i]);
//     }
//     return result;
// };

// console.log(cubizer(numArray));



// 3 не работает. что-то я совсем не то делаю
// const words = ['a', 'b', 'sqw'];

// const filterLongString = (numbers,x) =>{

//  const result = words.filter((number) => {
//     return numbers.length <= x;
// });
// return filterLongString;
// };

// console.log(filterLongString(words, 1));



// 4.1
// // const array = ['Hello', 'World', 'Hello world'];
// const array = ['a', 1, 'b', 2, 'sqw', [1, 2, 3]];

// const filterOnlyNumbers = (numbers) => {
//  return array.filter((number)=>{
//     return typeof number === 'number'
//   });
// };
// console.log(filterOnlyNumbers(array));



// 4.2
// // const array = ['Hello', 'World', 'Hello world'];
// const array = ['a', 1, 'b', 2, 'sqw', [1, 2, 3]];

// const filterOnlyNumbers = (numbers) => {
//     const result=[];

//     for (let i = 0; i < numbers.length; i++){
//         if(typeof numbers[i]==='number'){
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// };
// console.log(filterOnlyNumbers(array));




// 5.1
// // const arr = [1, 3, 2, 5]
// const arr = [3, 4, 5, 12, 10, 25];
// function findMaxNamber(arr){
//   let max = arr[0];
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];   
//     }
//    }
//  return max;
// }
 
// console.log(findMaxNamber(arr));



// 5.2
// // const arr = [1, 3, 2, 5];
// const arr = [3, 4, 5, 12, 10, 25];
// const max = arr.reduce(function(a, b) {
//     return Math.max(a, b);
// });
// console.log(max);







