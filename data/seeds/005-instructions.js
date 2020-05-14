
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, instructions: "Pour cereal in bowl" },
        { recipe_id: 1, step_number: 2, instructions: "Pour milk in bowl" },
        { recipe_id: 2, step_number: 1, instructions: "Crack egg into low heat pan" },
        { recipe_id: 2, step_number: 2, instructions: "Flip egg when the white parts are no longer translucent" },
        { recipe_id: 2, step_number: 3, instructions: "Take the egg out of the pan when it reaches your desired runniness" },
        { recipe_id: 3, step_number: 1, instructions: "Put bread on plate" },
        { recipe_id: 3, step_number: 2, instructions: "Put ham on bread" },
        { recipe_id: 3, step_number: 3, instructions: "Put cheese on ham" },
      ]);
    });
};
