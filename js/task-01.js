const categoriesEl = document.getElementById("categories");
console.log("Number of categories:", categoriesEl.children.length);

const categoryNameEl = document.querySelectorAll(".item");
for (const el of categoryNameEl) {
  const listEl = el.lastElementChild;
  console.log("Category:", `${el.firstElementChild.textContent}`);
  console.log("Elements:", listEl.children.length);
}
