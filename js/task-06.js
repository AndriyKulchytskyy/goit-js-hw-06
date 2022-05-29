const input = document.querySelector('[id="validation-input"]');
const maxLengthInput = parseInt(input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(value){
    if(maxLengthInput === input.value.length){
        input.classList.remove('invalid');
        input.classList.add('valid');
    }else{
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};