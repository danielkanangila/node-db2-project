exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("vin").notNullable().unique();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();
    table.string("year").nullable();
    table.string("transmission").nullable();
    table.string("title_status").nullable();
    table.text("fuel").nullable();
    table.text("comment").nullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
