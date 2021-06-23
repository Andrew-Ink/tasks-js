const openButton = document.querySelector('#openbutton');
const body = document.body;

openButton.addEventListener('click', fn => {

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const conteiner = document.createElement("div");
  conteiner.classList.add("inner-conteiner");

  const content = document.createElement("div");
  content.classList.add("content");
  content.innerHTML = "Hello <b>world!</b>";

  const closeButton = document.createElement("a");
  closeButton.classList.add("closebutton");
  closeButton.textContent = "x";
  closeButton.href = "#";

  closeButton.addEventListener('click', event => {
    event.preventDefault();
    body.removeChild(overlay);
  });

  overlay.addEventListener('click', event => {

  if (event.target === overlay){
    body.removeChild(overlay);

  }
  });


  overlay.appendChild(conteiner);
  conteiner.appendChild(closeButton);
  conteiner.appendChild(content);
  body.appendChild(overlay);

});


