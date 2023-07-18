const inputEl = document.getElementById("title");
const addBtn = document.getElementById("create");
const list = document.getElementById("list");

// function render(){

//   // for(let i = 0; i < notes.length; i++ ){
//   //   list.insertAdjacentHTML("beforeend",
//   // getNoteTempl(notes[1]));
//   // }
//   for(let note of notes){
//     list.insertAdjacentHTML("beforeend",
//   getNoteTempl(note));
//   }

// }

// render();

// addBtn.onclick = function() {
//   if(inputEl.value.length === 0){
//     return
//   }
//   list.insertAdjacentHTML("beforeend",
//   getNoteTempl(inputEl.value)
//   );
//   inputEl.value = ''
// }

// function getNoteTempl(title){
//   return `
//   <li class="list-group-item d-flex justify-content-between align-items-center" id="list">
//     <span>${title}</span>
//     <span>
//       <span class="btn btn-small btn-success"><i class="fas fa-check"></i></span>
//       <span class="btn btn-small btn-danger"><i class="fas fa-times"></i></span>
//     </span>
//   </li>
// `
// };

/*---------------------------------------------------------*/

const notes = [
  {
    title: "write a note",
    completed: false,
  },
  {
    title: "theory",
    completed: true,
  },
];

function render() {
  list.innerHTML = "";
  if(notes.length === 0){
    list.innerHTML = "<p>Nothing here<p>"
  }
  for (let i = 0; i < notes.length; i++) {
    list.insertAdjacentHTML("beforeend", getNoteTempl(notes[i], i));
  }
  // for(let note of notes){
  //   list.insertAdjacentHTML("beforeend",
  // getNoteTempl(note));
  // }
}
render();

addBtn.onclick = function () {
  if (inputEl.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputEl.value,
    complited: false,
  };
  notes.push(newNote);
  render();
  inputEl.value = "";
};

list.onclick = function (event) {
  if(event.target.dataset.index){
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if(type === "toggle"){
      notes[index].completed = !notes[index].completed
    } else if(type === "remove") {
      notes.splice(index, 1)
    }
    render()
  }
}

function getNoteTempl(note, index) {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle" >
    1
  </span>
      <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove"><i class="fas fa-times"></i></span>
    </span>
  </li>
`;
}
/*----------------------------------------------------------------*/
// const people = [
//   { name: "Yuliia", budget: 7654 },
//   { name: "Oleg", budget: 1254 },
//   { name: "Ivan", budget: 7050 },
// ];

// const sumBudget = people
//   .filter((p) => p.budget > 5000)
//   .map((p) => p.budget)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);

// const string = "Hello? world!";
// const reversed = string
//   .split("")
//   .toReversed()
//   .join("!")
//   .split("")
//   .filter((c) => c !== "!");

// console.log(reversed);
