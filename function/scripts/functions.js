let num = 0;
let rem;
// let number = prompt('Введи число', '');
// let parseNumber = parseInt(number);

checkPerfectNum = (number) => {
  for(let i = 1; i<number; i++){
    rem = number%i; // в числі 6 одна 5, тому остача =1, в числі 6 дві 3 і остача =0, і ця остача зберігається в rem
    if(rem === 0){ //якщо число, залишає остачу 0,
     num+=i; //  то воно зберігається в num, але num ще й додає всі збережені числа
    }
  }
  if(number === num){ // якщо сума цих збережених чисел = 6, то це число є ідеальним
    console.log('Єєєє!!!!')
  } else{
    console.log('Нііііі')
  }
}

checkPerfectNum(28);