var controls = document.querySelector('.order-form');
controls.classList.add('order-form-none');


var buttonSearch = document.querySelector('.open-form'),
    formSearch = document.querySelector('.order-form');

buttonSearch.addEventListener('click', openForm);
function openForm(e){
  e.preventDefault;
  formSearch.classList.remove('order-form-none');
}
