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
