const target = document.getElementsByTagName('input')[0];
const h1 = document.getElementById('viewer');

let sentences;
target.addEventListener("change",sentences = function(e){

  let file = e.target.files;

  const reader = new FileReader();
  reader.readAsText(file[0]);
  
  reader.onload = function(eve){
    return reader.result;
  }
},false);