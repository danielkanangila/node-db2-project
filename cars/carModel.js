const Model = require("./../data/Model");

class Car extends Model {
  constructor() {
    super();
    this.tableName = "cars";
    // Data validation schema
    this.jsonSchema = {
      type: "object",
      required: ["vin", "make", "model", "mileage"],
      properties: {
        vin: { type: "string", minimum: 17, maximum: 17 },
        make: { type: "string" },
        model: { type: "string" },
        mileage: { type: "integer" },
        year: { type: "string", minimum: 4, maximum: 4 },
        transmission: { type: "string" },
        title_status: { type: "string" },
        fuel: { type: "string" },
        comment: { type: "string" },
      },
    };
  }
}
module.exports = new Car();
// const db = require("./../data/dbConfig");

// const tableName = "cars";

// const find = () => {
//   return db(tableName);
// };

// const findById = (id) => {
//   return db(tableName).where({ id }).first();
// };

// const create = (car) => {
//   return db(tableName).insert(car).returning("*");
// };

// const update = (id, changes) => {
//   return db(tableName)
//     .where({ id })
//     .update(changes)
//     .then(() => {
//       return findById(id);
//     });
// };

// const remove = (id) => {
//   return db(tableName).where("id", id).del();
// };

// module.exports = {
//   find,
//   findById,
//   create,
//   update,
//   remove,
// };
