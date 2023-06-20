const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');

const submitButton = document.getElementById('submitButton');
const inputRadios = document.querySelectorAll('input[type="radio"');
const result = document.querySelector('.result');

inputRadios.forEach( radio => {
    radio.addEventListener('change', () => {
        submitButton.disabled = false;
    })
});

submitButton.addEventListener('click', () => {
    let selectedValue = document.querySelector('input[type="radio"]:checked').value;
    result.textContent = selectedValue;
    
    ratingState.classList.toggle('d-none');
    thankYouState.classList.remove('d-none');
});