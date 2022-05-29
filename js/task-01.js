//  1.
const categories = document.getElementById('categories');
const allItems = categories.querySelectorAll('.item');
console.log('Number of categories: ',allItems.length);

//  2.
allItems.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log('Elements: ',item.querySelector('ul').querySelectorAll('li').length);
});

