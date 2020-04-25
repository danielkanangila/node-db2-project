exports.up = function (knex) {
  return knex.schema.createTable("cars_info", (table) => {
    table.increments();
    table.integer("car_id").unsigned().notNullable();
    table.string("transmission").nullable();
    table.string("title_status").nullable();
    table.text("fuel").nullable();
    table.text("others").nullable();
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
  return knex.string.dropTableIfExists("cars_info");
};
