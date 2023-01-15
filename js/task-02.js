const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

const elements = ingredients.map((el) => {
  const listItem = document.createElement("li");
  listItem.textContent = [el];
  listItem.classList.add("item");

  return listItem;
});

ingredientsList.append(...elements);
console.log(ingredientsList);
