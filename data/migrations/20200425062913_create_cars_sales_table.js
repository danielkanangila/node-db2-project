exports.up = function (knex) {
  return knex.schema.createTable("cars_sales", (table) => {
    table.increments();
    table.integer("car_id").unsigned().notNullable();
    table.string("customer_name").notNullable();
    table.float("price").notNullable();
    table.timestamps(true, true);

    table
      .foreign("car_id")
      .references("id")
      .inTable("cars")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars_sales");
};
