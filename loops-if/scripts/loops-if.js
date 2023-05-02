//ЗАВДАННЯ 1

// const number = prompt('Давай мені п’ятирозрядне число','тут');
// const  reversedNumber = number.split('').reverse().join('');

// if(number === reversedNumber){
//   console.log('Так, це паліндром')
// } else {
//   console.log('Ні, це не паліндром')
// } 

//ЗАВДАННЯ 2

// const summ = prompt('Давай мені суму до оплати','тут');

// const firstPer = summ - (summ/100*3);
// const secondPer = summ - (summ/100*5);
// const thirdPer = summ - (summ/100*7);

// if( summ !=='200'){
//   console.log('знижка буде від 200грн')
// } else if ( summ <= '300'){
//   console.log(`знижка 3%, сума до сплати: ${firstPer}`)
// } else if ( summ <= '500'){
//   console.log(`знижка 3%, сума до сплати: ${secondPer}`)
// } else if ( summ <= '700' || summ> '700'){
//   console.log(`знижка 3%, сума до сплати: ${thirdPer}`)
// };

//ЗАВДАННЯ 4

// let week = true;
// const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер' ,"Пʼятниця", 'Субота', 'Неділя'];


// for(let i = 0; i < days.length; i++){
//   if (week === true) {
//     week = confirm(days[i]);
//   } else if (week === false)break;
// };
// console.log('Все');

//ЗАВДАННЯ 3
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for(let i = 0; i<10; i++){
//   let numbers = parseInt(prompt('Введи числа по одному','тут пиши одне число'));
//   if (numbers > 0) {
//     positive++;
//   } else if(numbers < 0){
//     negative++;
//   }else if(numbers === 0){
//     zero++;
//   } else{
//     alert('Oops, try again!')
//   }

//   if(numbers % 2 ===0){
//     even++;
//   } else if(numbers % 2 !==0){
//     odd++;
//   } else{
//     console.log('Opps')
//   };
// }

// alert(`Додатніх чисел ${positive}, 
// Відʼємних чисел ${negative}, 
// Нулів ${zero},
// Парних чисел ${even}, 
// Непарних чисел ${odd}`);










// let reverseStr = numbers.split('');
// console.log(reverseStr);



// let array = [].slice.call(numbers);
// console.log (numbers);
// const love = [1,3,4,6];
// console.log(love);