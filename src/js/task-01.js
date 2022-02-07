const categoriesRef = document.querySelector('#categories');
const itemCategories = categoriesRef.children;
console.log(`Number of categories: ${itemCategories.length}`);

[...itemCategories].forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    const itemEl = element.lastElementChild.children.length;
    console.log(`Elements: ${itemEl}`);
});

