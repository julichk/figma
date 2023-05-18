
//ЗАВДАННЯ 1
const myButton = document.querySelector('.content_conteiner_item_button');
const myText = document.querySelector('.content_conteiner_item_text');
const block = document.querySelector('.content_conteiner_item');
const  textArea = document.createElement('textarea');
textArea.name = "post";
textArea.maxLength = "1000";
textArea.cols = "80";
textArea.rows = "40";
//block.appendChild(textArea);
textArea.classList.add('edit-textarea');
  

  
document.addEventListener('keydown', function(event) {
  //event.preventDefault();
    if ((event.key === 'e' || event.key === 'E') && (event.ctrlKey || event.metaKey)) {
    //myText.style.display = 'none'
    block.appendChild(textArea)
    textArea.value = myText.textContent;
    //myText.remove()
    myText.style.display = 'none';
} else if ((event.key === 's' || event.key === 's') && (event.ctrlKey || event.metaKey)) {
  //event.preventDefault()
    if(textArea){
      myText.textContent = textArea.value;
      block.removeChild(textArea);
      myText.style.display = 'block';
    }
  
  }
});

//ЗАВДАННЯ 2
const tableHeaders = document.querySelectorAll('th');
const table = document.querySelector('.content_table_item');

tableHeaders[0].classList.add('header-names');
tableHeaders[1].classList.add('header-age');
tableHeaders[2].classList.add('header-selary');

tableHeaders.forEach(function(tableHeader) {
tableHeader.addEventListener('click', function() {
  sortTable(0); // обрати, який стопчик сортувати
});
});


function sortTable(n) {
  let switching, shouldSwitch, sort, valueX, valueY, tableRows, switchСount = 0; //перехід, умови переходу, сортування, всі рядки таблички, кіл-ть перестановок
  let index;
  
  switching = true;
  sort = 'asc';
  tableRows = table.rows;
  

  while(switching){
    switching = false;
    tableRows = table.rows; //всі рядки таблички

    for(index = 1; index < (tableRows.length - 1); index++){
      shouldSwitch = false
      valueX = tableRows[index].getElementsByTagName("td")[n];
      valueY = tableRows[index + 1].getElementsByTagName("td")[n];
      
      // умови сортування всіх стовпців від малого до великого і навпаки (перший стовпчик порівнює літери)
      if(sort == 'desc'){
        if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
        }
      } else if(sort == 'asc'){
        if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
        }
      }
    }
    // метод зміни рядків місцями, щоб сортувати
    if(shouldSwitch){
      tableRows[index].parentNode.insertBefore(tableRows[index + 1], tableRows[index]) // parentNode - обираю table , insertBefore - установка рядка перед наступним(перестановка)
      switching = true;
      switchСount ++
    } else{
      if(switсhСount == 0 && sort == 'asc'){
        sort = 'desc';
        switching = true;
      }
    }
  }
}; 