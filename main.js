const emailInput = document.getElementById('email-input');
const button = document.getElementById('btn');
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const errorMessage = document.getElementById('error-message');

document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const input = document.getElementsByTagName('input');
        const errorMsg = document.getElementsByClassName('error');
        for (let i = 0; i < input.length; ++i) {
            if (input[i].value == '') {
                errorMsg[i].style.display = 'block';
                errorMsg[i].style.color = 'red';
                input[i].style.background = 'url(images/icon-error.svg) right 20px center no-repeat';

            } else {
                errorMsg[i].style.display = 'none';
                input[i].style.background = '';
            }
        }

        if (emailInput.value !== '' && !filter.test(emailInput.value)) {
            errorMessage.style.display = 'block';
            errorMessage.style.color = 'red';
            emailInput.style.background = 'url(images/icon-error.svg) right 20px center no-repeat';

        } else {
            errorMessage.style.display = 'none';
        }
    })
});




