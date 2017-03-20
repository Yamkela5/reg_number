// var form = document.getElementById('RegNo');
var txtbox = document.querySelector('.textbox');
var plte = document.querySelector('.plates');
var add = document.querySelector('.add');


add.addEventListener("click",function() {
  if (txtbox.value.length > 0) {
    var copy = document.querySelector('.numplate').cloneNode();
    copy.innerHTML = txtbox.value;
    plte.appendChild(copy);
    txtbox.value = '';
  }
});
