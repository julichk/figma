//ЗАВДАННЯ 1
// let num = 0;
// let rem = 0;
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
//   for (let numb = minParseNumber; numb <= maxParseNumber; numb++) {
//     let summ = 0;
//     for (let variable = 1; variable < numb; variable++) {
//       const remainder = numb % variable;
//       if (remainder === 0) {
//         summ += variable;
//       }
//     }
//     if (summ === numb) {
//       document.write(`${numb} - Єєєє!!!!` + '<br/>');
//     } else {
//       document.write(`${numb} - Ні :(` + '<br/>');
//     }
//   }
// }

//checkPerfectNum(minParseNumber, maxParseNumber);
