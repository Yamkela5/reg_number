// var form = document.getElementById('RegNo');
var txtbox = document.querySelector('.textbox');
var plte = document.querySelector('.plates');
var add = document.querySelector('.add');
var dropbox =document.querySelector('#dropbox');

add.addEventListener("click",function() {
  if (txtbox.value.length > 0) {
    var copy = document.querySelector('.numplate').cloneNode();
    copy.innerHTML = txtbox.value;
    plte.appendChild(copy);
    txtbox.value = '';
  }
});
dropbox.addEventListener('change', function(e) {
  var places = document.querySelectorAll('.numplate');
  console.log(places);

  for(var i =0; i<places.length; i++){
    if (e.target.value=== 'All') {

      places[i].style.display= "block";
    }
      else if (places[i].innerHTML.startsWith(e.target.value))
      {
        places[i].style.display='block';
      }
      else{
        places[i].style.display='none';
      }
    }

})
