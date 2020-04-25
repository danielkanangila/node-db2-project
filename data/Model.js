const { Validator } = require("jsonschema");
const db = require("./dbConfig");
const ValidationError = require("../errors/ValidationError");

const validator = new Validator();

class Model {
  constructor() {
    this.tableName = "";
    this.jsonSchema = "";
  }

  query() {
    return db(this.tableName);
  }

  find() {
    return this.query();
  }

  findById(id) {
    return this.query().where({ id }).first();
  }

  create(payload) {
    const v = validator.validate(payload, this.jsonSchema);
    if (v.errors.length) {
      throw new ValidationError(v.errors);
    }
    return this.query().insert(payload).returning("*");
  }

  update(id, payload) {
    const v = validator.validate(payload, this.jsonSchema);
    if (v.errors.length) {
      throw new ValidationError(v.errors);
    }
    return this.query().where({ id }).update(payload).returning("*");
  }

  remove(id) {
    return this.query().where("id", id).del();
  }
}

module.exports = Model;
