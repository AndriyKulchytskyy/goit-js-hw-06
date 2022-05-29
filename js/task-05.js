const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event){
    const text = event.currentTarget.value;
    if(text){
        refs.output.textContent = text;
    }else{
        refs.output.textContent = 'Anonymous';
    }
};





























