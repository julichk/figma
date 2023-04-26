

/*radius = prompt('Привіт, дай радіус кола','число');
prompt('Площа кола дорівнює', radius*Math.PI**2);
//alert(radius*Math.PI**2);

distance = prompt('Cкільки км до міста?','число');
time = prompt('За скільки годин хочеш дістатися туди?','число');
prompt('Ти добрешся з такою швидкістю:', distance/time);

const exchangeRrate = 0.90;

dollar = prompt('Скільки доларів цікавить?','число');
prompt('Ось скільки це буде євро:', dollar * exchangeRrate);*/

//for(let index = 0; index < 10; index++){
//    console.log(index++);
//}

// 
const person = {
  name: 'Connie',
  surname: 'Legros',
  age: 86,
  email: 'Gerardo91@yahoo.com',
  isOpenToWork: true
};

// const userName = 'Connie';

// const suserSurname = 'Legros';

// const userAge = 86;

// const userEmail = 'Gerardo91@yahoo.com';

// const userIsOpenToWork = true;
  
// console.log(userName===person.name);
const {name: userName,...otherUserData } = person;
console.log(userName, otherUserData);

const car = {
  brand: 'BMV',
  color: 'black',
  age: 2
};

car.forEach(item => {
  console.log(`user name is ${item.brand}`)
});
