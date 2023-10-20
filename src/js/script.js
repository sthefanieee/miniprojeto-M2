class Note {
  constructor(text) {
    this.text = text;
  }
}



notesArray = [];

const tabela = document.getElementById("table")

function saveNote() {
// Salva a anotação
let noteText = new Note(document.getElementById('myDiary').value);

if(noteText.text.length > 0){
  notesArray.push(noteText)  
  alert('item salvo !');
  console.log(notesArray)
  displayNotes()
}else{
  alert('nada para salvar !')
}


}

function conteudo(note,index){
      return `  <table class="table">
      <tr>
          <th>Salvos <span>"${index}"</span></th>
      <tr>
          <td >${note.text}</td>
      </tr>
      </tr>
      </table>
`
}



function editNote() {
// Edita a anotação

if(notesArray && notesArray.length > 0){
  var noteIndex = prompt("Digite o numero da anotação que você quer editar (exemplo: 0 = primeira, 1 = segunda, 2 = terceira ...)");
  var newText = prompt("Digite o novo segredo:");
  if(noteIndex && newText){
    notesArray[noteIndex].text = newText;
    displayNotes()
  }else{
    alert('nenhuma mudança feita!')
  }

}else{
  alert('nenhuma nota salva!')
}

}

function deleteNote() {
// Exclui a anotação
if(notesArray && notesArray.length > 0){
  
  var noteIndex = prompt("Digite o numero da anotação que você quer excluir (exemplo: 0 = primeira, 1 = segunda, 2 = terceira ...)");
  if(noteIndex){
  notesArray.splice(noteIndex, 1);
  displayNotes()
}else{
  alert('Nenhuma alteração feita!')
}
}else{
  alert('Nenhuma nota salva!')
}

}

function displayNotes() {
  tabela.innerHTML = "";
 
 

  notesArray.forEach((note,index) => {

    tabela.innerHTML += conteudo(note,index)
  })
  


}