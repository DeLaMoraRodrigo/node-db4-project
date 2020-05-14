
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1, unit: "cup" },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, unit: "cup" },
        { recipe_id: 2, ingredient_id: 3, quantity: 1 },
        { recipe_id: 3, ingredient_id: 4, quantity: 2, unit: "slices" },
        { recipe_id: 3, ingredient_id: 5, quantity: 1, unit: "slice" },
        { recipe_id: 3, ingredient_id: 6, quantity: 1, unit: "slice" },
      ]);
    });
};
