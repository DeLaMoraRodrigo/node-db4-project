const express = require('express');

const RecipeRouter = require('./routers/recipes-router');
const IngredientRouter = require('./routers/ingredients-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

module.exports = server;