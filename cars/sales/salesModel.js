const Model = require("./../../data/Model");

class CarSale extends Model {
  constructor() {
    super();
    this.tableName = "cars_sales";
    this.jsonSchema = {
      type: "object",
      require: ["card_id", "customer_name", "price"],
      properties: {
        card_id: { type: "integer" },
        customer_name: { type: "string" },
        price: { type: "float" },
      },
    };
  }
}

module.exports = new CarSale();
