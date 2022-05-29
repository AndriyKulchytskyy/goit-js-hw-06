const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allElements = [];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  allElements.push(element);
});

ingredientsList.append(...allElements);
console.log(ingredientsList);

