var btn = document.querySelector(".btn-search");
var form = document.querySelector(".form-one");


btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-close");
});
