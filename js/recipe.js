const main = document.getElementsByTagName("main"); //layout element

const textContainer = document.getElementsByClassName("text-container"); //left container of the body
const imageContainer = document.getElementsByClassName("image-container"); //right container of the body

const recipeDetails = document.getElementById("recipe-description"); //ingredients dropdown
const ingredientList = document.createElement("ul");

const mealdesc = localStorage.getItem("mealsDesc"); //get mealDescription from local Storage
const mealDescription = JSON.parse(mealdesc);

const mealName = document.getElementById("recipe-name");

mealName.innerText=`${mealDescription["strMeal"]}`

// add Instructions of meal to DOM
const instructions = document.createElement("div");
instructions.id = "instruction-wrapper";
instructions.innerHTML = `
<div id = "instructions"> <p> ${mealDescription["strInstructions"]} </p></div>`;
textContainer[0].appendChild(instructions);

//add image of recipe to DOM
imageContainer[0].innerHTML = `<img src = "${mealDescription["strMealThumb"]}"  id ="thumbnail"/>`;

// Add ingredients and measure to DOM
let strIngredient = [];
for (i = 1; i <= 20; i++) {
  strIngredient.push("strIngredient" + i);
}
let strMeasure = [];
for (i = 1; i <= 20; i++) {
  strMeasure.push("strMeasure" + i);
}
i = 0;
while (i <= 20) {
  a = strIngredient[i];
  b = strMeasure[i];

  if (mealDescription[a] == "" || mealDescription[a] == undefined) {
    i++;
    continue;
  }

  const ingredientListItem = document.createElement("li");
  ingredientListItem.innerHTML = `${mealDescription[a]} = ${mealDescription[b]}`;

  ingredientList.append(ingredientListItem);
  i++;
}

recipeDetails.append(ingredientList);
