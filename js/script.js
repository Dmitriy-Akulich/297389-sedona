var buttonSearch = document.querySelector('.open-form');
var formSearch = document.querySelector('.order-form');
var form = document.querySelector("form");
var come = document.querySelector("[name=date-come]");
var exit = document.querySelector("[name=date-exit]");
var adults = document.querySelector("[name=all-adults]");
var children = document.querySelector("[name=all-children]");
var storageAdults = localStorage.getItem("adults");
var storageChildren = localStorage.getItem("children");

buttonSearch.addEventListener('click', openForm);
function openForm(e){
  e.preventDefault();

formSearch.classList.toggle('order-form-none');

if (storageAdults || storageChildren) {
  adults.value = storageAdults;
  children.value = storageChildren;
  }
}

form.addEventListener("submit", function(event) {
  if (!come.value || !exit.value || !adults.value || !children.value) {
    event.preventDefault();
      alert("Пожалуйста, заполните все поля!");
  } else {
    localStorage.setItem("storageAdults", adults.value);
    localStorage.setItem("storageChildren", children.value);
    alert("Спасибо, Ваша заявка принята!");
  }
});
