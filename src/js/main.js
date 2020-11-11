const form = document.getElementById('print-form-id');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let data = Object.fromEntries((new FormData(this)).entries());

  let titlePlace = document.getElementById('print-page-box-title');
  titlePlace.textContent = data.title;
  
  let textPlace = document.getElementById('print-page-box-text');
  while (textPlace.firstChild) {
    textPlace.removeChild(textPlace.firstChild);
  }
  for (let t of data.text.split('\n')) {
    let p = document.createElement('p');
    p.textContent = t;
    textPlace.appendChild(p);
  }

  window.print();
});
