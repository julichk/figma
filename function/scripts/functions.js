
//ЗАВДАННЯ 1
// let num = 0;
// let rem;
// let PerfectNumber = prompt('Введи число', '');
// let parseNumber = parseInt(number);

// checkPerfectNum = (PerfectNumber) => {
//   for(let index = 1; index < PerfrctNumber; index++){
//     rem = PerfectNumber % index; // в числі 6 одна 5, тому остача =1, в числі 6 дві 3 і остача =0, і ця остача зберігається в rem
//     if(rem === 0){ //якщо число, залишає остачу 0,
//      num += index; //  то воно зберігається в num, але num ще й додає всі збережені числа
//     }
//   }
//   if(number === num){ // якщо сума цих збережених чисел = 6, то це число є ідеальним
//     console.log('Єєєє!!!!')
//   } else{
//     console.log('Нііііі')
//   }
// }

// checkPerfectNum(parseNumber);


//ЗАВДАННЯ 2
// const minNumber = prompt('Введи мінімальне число ', '');
// const maxNumber = prompt('Введи максимальне число ', '');
// const minParseNumber = parseInt(minNumber);
// const maxParseNumber = parseInt(maxNumber);

// function checkPerfectNum(minParseNumber, maxParseNumber) {
//   for (let num = minParseNumber; num <= maxParseNumber; num++) {
//     let sum = 0;
//     for (let index = 1; index < num; index++) {
//       const rem = num % index;
//       if (rem === 0) {
//         sum += index;
//       }
//     }
//     if (sum === num) {
//       document.write(`${num} - Єєєє!!!!` + '<br/>');
//     } else {
//       document.write(`${num} - Ні :(` + '<br/>');
//     }
//   }
// }

checkPerfectNum(minParseNumber, maxParseNumber);


