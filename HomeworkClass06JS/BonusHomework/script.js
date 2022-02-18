console.log('-------------Bonus Homework-------------');

let nameRecipe = prompt('Please put the name of Recipe');

let ingredientsNum = prompt('Please put how many ingredients you need');

let ingredients =[];

for(let i = 0; i < ingredientsNum; i++){
    ingredients.push(prompt('Put name of every ingredients'));
}

let recipeTit = document.getElementById('recipeTitle');
	recipeTit.innerHTML = `Your Recipe is: ${nameRecipe}`; 

let riceChTab = document.getElementById('listIngredients');

let tableLis = document.getElementById('tableList');

document.getElementById('title').colSpan = ingredientsNum;

for(let i = 0; i < ingredients.length; i++){
	riceChTab.innerHTML += `<li>${ingredients[i]}</li> `;
	tableLis.innerHTML += `<td>${ingredients[i]}</td> `;
}

