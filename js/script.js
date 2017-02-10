var buttonSearch = document.querySelector('.open-form'),
    formSearch = document.querySelector('.order-form');

buttonSearch.addEventListener('click', openForm);
function openForm(e){
  e.preventDefault();
  formSearch.classList.toggle('order-form-none');
}
