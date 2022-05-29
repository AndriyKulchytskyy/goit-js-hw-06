const input = document.querySelector('[id="font-size-control"]');
const span = document.querySelector('[id="text"]');

input.addEventListener('input', onMouseMove);

function onMouseMove(event){
span.style.fontSize = `${event.currentTarget.value}px`;
}