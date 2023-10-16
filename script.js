class Note {
    constructor(text) {
      this.text = text;
    }
  }

var notesArray = [];

function saveNote() {
  // Salva a anotação
  var noteText = document.getElementById("myDiary").value;
  notesArray.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notesArray));
}

function editNote() {
  // Edita a anotação
  var noteIndex = prompt("Digite a anotação que você deseja editar:");
  var newText = prompt("Digite o novo segredo:");
  notesArray[noteIndex] = newText;
  localStorage.setItem("notes", JSON.stringify(notesArray));
}

function deleteNote() {
  // Exclui a anotação
  var noteIndex = prompt("Digite a anotação que você deseja excluir:");
  notesArray.splice(noteIndex, 1);
  localStorage.setItem("notes", JSON.stringify(notesArray));
}

function displayNotes() {
    // Exibe as anotações
    var notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = ""; // Limpa as anotações antigas
    for (var i = 0; i < notesArray.length; i++) {
      var para = document.createElement("P");
      para.innerText = "Anotação " + (i+1) + ": " + notesArray[i];
      notesDiv.appendChild(para);
    }
  }