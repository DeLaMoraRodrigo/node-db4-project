const express = require('express');

const Ingredients = require('./ingredient-model');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    Ingredients.getRecipesByIngredient(id)
               .then(recipes => {
                   if(recipes) {
                       res.status(200).json({ data: recipes })
                   }else {
                       res.status(404).json({ message: "Ingredient with specified ID not found" })
                   }
               })
               .catch(error => {
                   console.log({ error })
                   res.status(500).json({ message: "Error retrieving recipes that use the ingredient with specified ID" })
               })
})

module.exports = router;