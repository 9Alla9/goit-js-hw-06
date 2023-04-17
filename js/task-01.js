const ListCategories = document.querySelectorAll(".item");
console.log(`Number of ${ListCategories.length} categories.`);

const categoriesArray = [...ListCategories]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
