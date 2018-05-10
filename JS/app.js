var tableBombIt = [
  ' ',
  '*',
  '1',
  ' ',
  '/n',
  ' ',
  ' ',
  '*',
  '2',
  '/n',
  '1',
  '*',
  ' ',
  ' ',
  '/n',
  ' ',
  '3',
  '*',
  ' '
];


var containerBombIt = document.getElementById('container-bomb-it');;
var bombIt = document.getElementById('bomb-it');

//Hay que decirle que va a recibir un arreglo.
var drawGameZone = function(array) {
  for(i = 0; i < tableBombIt.length; i++){
    var cell = document.createElement('div');
    var enter = document.createElement('br');

    if(array[i] == '1' || array[i] == '2' || array[i] == '3' ) {
      cell.className = 'number';
      cell.innerText = array[i];
      cell.onclick = showNumber;
    } else if(array[i] == ' ') {
      cell.className = 'emptySpace'
      cell.onclick = changeColor;
    } else if (array[i] == '*') {
      cell.className = 'bomb';
      cell.onclick = boom;
    } else if(array[i] == '/n'){
      bombIt.appendChild(enter);
      continue;
    }

    bombIt.appendChild(cell);
  }
  addBtnRestart();
};

var showNumber = function() {
  this.className = 'number numberShow';
};

var changeColor = function() {
  this.style.backgroundColor = '#EDEB4B';
};

var boom = function() {
  containerBombIt.removeChild(bombIt);
  containerBombIt.innerHTML = "<img src='assets/images/boom.gif' alt='bomb'>"
  addBtnRestart();
};

var addBtnRestart = function() {
  var btnRestart = document.createElement('button');
  btnRestart.innerText = 'Restart!!';
  btnRestart.addEventListener('click', reStart)
  containerBombIt.appendChild(btnRestart);
};

var reStart = function() {
  location.reload();
}


drawGameZone(tableBombIt);
