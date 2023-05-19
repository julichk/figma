//ЗАВДАННЯ 1
const myButton = document.querySelector(".content_conteiner_item_button");
const myText = document.querySelector(".content_conteiner_item_text");
const block = document.querySelector(".content_conteiner_item");
const textArea = document.createElement("textarea");
textArea.name = "post";
textArea.maxLength = "1000";
textArea.cols = "80";
textArea.rows = "40";
textArea.classList.add("edit-textarea");

document.addEventListener("keydown", function (event) {
  if (
    (event.key === "e" || event.key === "E") &&
    (event.ctrlKey || event.metaKey)
  ) {
    //myText.style.display = 'none'
    block.appendChild(textArea);
    textArea.value = myText.textContent;
    block.classList.remove('style');
    //myText.remove()
    myText.style.display = "none";
  } else if (
    (event.key === "s" || event.key === "s") &&
    (event.ctrlKey || event.metaKey)
  ) {
    
    if (textArea) {
      myText.textContent = textArea.value;
      block.removeChild(textArea);
      document.querySelector('.content_conteiner_item').style.padding = '0px';
      myText.style.display = "block";
    }
  }
});

//ЗАВДАННЯ 2
const tableHeaders = document.querySelectorAll("th");
const table = document.querySelector(".content_table_item");

tableHeaders[0].classList.add("header-names");
tableHeaders[1].classList.add("header-age");
tableHeaders[2].classList.add("header-selary");

tableHeaders.forEach(function (tableHeader) {
  tableHeader.addEventListener("click", function () {
    sortTable(0); // обрати, який стопчик сортувати
  });
});

function sortTable(n) {
  let switching,
    shouldSwitch,
    sort,
    valueX,
    valueY,
    tableRows,
    switchCount = 0; //перехід, умови переходу, сортування, всі рядки таблички, кіл-ть перестановок
  let index;

  switching = true;
  sort = "asc";
  tableRows = table.rows;

  while (switching) {
    switching = false;
    tableRows = table.rows; //всі рядки таблички

    for (index = 1; index < tableRows.length - 1; index++) {
      shouldSwitch = false;
      valueX = tableRows[index].getElementsByTagName("td")[n];
      valueY = tableRows[index + 1].getElementsByTagName("td")[n];

      // умови сортування всіх стовпців від малого до великого і навпаки (перший стовпчик порівнює літери)
      if (sort == "desc") {
        if (valueX.innerHTML.toLowerCase() < valueY.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (sort == "asc") {
        if (valueX.innerHTML.toLowerCase() > valueY.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    // метод зміни рядків місцями, щоб сортувати
    if (shouldSwitch) {
      tableRows[index].parentNode.insertBefore(
        tableRows[index + 1],
        tableRows[index]
      ); // parentNode - обираю table , insertBefore - установка рядка перед наступним(перестановка)
      switching = true;
      switchCount++;
    } else {
      if (switchCount == 0 && sort == "asc") {
        sort = "desc";
        switching = true;
      }
    }
  }
}

//ЗАВДАННЯ 3
const myWidthBlock= document.querySelector('.content_window_width');

let width, height; 
let resizing = false;
let initialX;
let initialY;

const changeWidth = (event) => { 
  
  resizing = true;
  initialX = event.clientX;
  initialY = event.clientY;
  width = parseInt(window.getComputedStyle(event.target).width, 10); //10 - показує яку систему чисел використовувати "100" = 100
  height = parseInt(window.getComputedStyle(event.target).height, 10);
  
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stop);
};
  
  const resize = () => {
  if(resizing) {
  const changeMyWidth = width + (event.clientX - initialX);
  myWidthBlock.style.width = changeMyWidth + 'px';
  const changeMyHeight = height + (event.clientY - initialY);
  myWidthBlock.style.height = changeMyHeight + 'px';
  }
};

  const stop = () => {
  resizing = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stop);
}

myWidthBlock.addEventListener('mousedown', changeWidth);
