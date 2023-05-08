

    
//ЗАВДАННЯ 1
const h = prompt('Години','');
const min = prompt('Хвилини','');
const sec = prompt('Секунди','');


//ОБʼЄКТ ОДИН НА ВСЕ
const clock = {
  hours: parseInt(h),
  minutes: parseInt(min),
  seconds: parseInt(sec),
  add_sec(seconds){
    for(this.seconds += seconds; this.seconds >= 60; this.seconds -= 60){
      this.add_min(1)
    }
  },
  add_min(minutes){
    for(this.minutes += minutes; this.minutes >= 60; this.minutes -= 60 ){
      this.add_hours(1)
    }
  },
  add_hours(hours){
    for(this.hours += hours; this.hours >= 24; this.hours -= 24 ){
    }
  }
  
}

clock.add_sec(15);
console.log(`${clock.hours}:${clock.minutes}:${clock.seconds}`);

// const getTime = (clock) => {
//   return `${clock.hours.padStart(2, '0')}:${clock.minutes.padStart(2, '0')}:${clock.seconds.padStart(2, '0')}`
// }


// const timeString = getTime(clock);
// console.log(timeString);

