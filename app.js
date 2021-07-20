showNotes();

let addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', (e) => {
  let addTxt = document.querySelector('#addTxt');
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  addTxt.value = '';
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = '';
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <a id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</a>
        </div>
    </div> `;
  });
  let notesElm = document.querySelector('#notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show Notes plz Just Add new Note`;
  }
}

function deleteNotes(index) {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
}

let search = document.querySelector('#searchTxt');

search.addEventListener('input', function () {
  let inputVl = search.value;
  console.log(inputVl);
  let noteCards = document.getElementsByClassName('.noteCard');
  Array.from(noteCards).forEach((element) => {
    let cardTxt = element.getElementsByTagName('p')[0];
    console.log(cardTxt);

    if (cardTxt.includes(inputVl)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});
