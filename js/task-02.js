const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");
const items = ingredients.map((element) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = element;
  return item;
});
list.append(...items);




// const list = ingredients.map(numberOfElements => {
//   const li = document.createElement("li");
//   let elements = "";
//   for (let i = 0; i < numberOfElements; i++) {
//     elements += "<li></li>";
//   }
//   return li.innerHTML = elements;
// })

// console.log(list(6));

//wynik: 6x obok siebie <li></li>


// for (let ingredient of ingredients) {
//   const ingredient = document.createElement("li");
//   const ingredientName = document.getElementsByName(ingredients);
//   console.log(ingredient);
// }

//wynik: 6x li - jedno pod drugim


