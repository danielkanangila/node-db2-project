const { Validator } = require("jsonschema");
const db = require("./dbConfig");
const ValidationError = require("../errors/ValidationError");

const validator = new Validator();

class Model {
  constructor() {
    this.tableName = "";
    this.jsonSchema = "";
    this.query = db;
  }

  find() {
    return this.query(this.tableName);
  }

  findById(id) {
    return this.query(this.tableName).where({ id }).first();
  }

  create(payload) {
    const v = validator.validate(payload, this.jsonSchema);
    if (v.errors.length) {
      throw new ValidationError(v.errors);
    }
    return this.query(this.tableName).insert(payload).returning("*");
  }

  update(id, payload) {
    const v = validator.validate(payload, this.jsonSchema);
    if (v.errors.length) {
      throw new ValidationError(v.errors);
    }
    return this.query(this.tableName)
      .where({ id })
      .update(payload)
      .returning("*");
  }

  remove(id) {
    return this.query(this.tableName).where("id", id).del();
  }
}

module.exports = Model;
