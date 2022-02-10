const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

const makeMenuIngredients = allIngredients => {
  return allIngredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    return itemEl;
  })
};

const makeMenuIngredientsMarkup = makeMenuIngredients(ingredients);

ingredientsRef.append(...makeMenuIngredientsMarkup);