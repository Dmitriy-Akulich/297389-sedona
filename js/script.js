var controls = document.querySelector('.order-form');
controls.classList.add('order-form-none');


    clickControl(controls);


function toggleStyle(control) {
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('order-form-none');
    }

    control.classList.add('order-form');

}

function clickControl(control) {
    control.addEventListener('click', function() {
        toggleStyle(control);
    });
}
