const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrementBtnClick = () => {
    return counterValue.textContent = Number(counterValue.textContent) + 1;    
}

const onDecrementBtnClick = () => {
    return counterValue.textContent = Number(counterValue.textContent) - 1;  
}

incrementBtn.addEventListener('click',onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);
