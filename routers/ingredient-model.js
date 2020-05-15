const db = require('../data/dbConfig');

module.exports = {
    getRecipesByIngredient
}

function getRecipesByIngredient(ingredient_id){
    return db('recipe_ingredient')
             .join('ingredients', 'recipe_ingredient.ingredient_id', '=', 'ingredients.id')
             .join('recipes', 'recipe_ingredient.recipe_id', '=', 'recipes.id')
             .select('recipes.id', 'recipes.recipe_name')
             .where({ 'recipe_ingredient.ingredient_id': ingredient_id })
}