
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "Frosted Flakes" },
        { ingredient_name: "Milk" },
        { ingredient_name: "Egg" },
        { ingredient_name: "White Bread" },
        { ingredient_name: "Sliced Ham" },
        { ingredient_name: "Kolby Jack Cheese" }
      ]);
    });
};
