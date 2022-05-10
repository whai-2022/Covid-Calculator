/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('businesses', (table) => {
    table.increments()
    table.string('auth0_ID')
    table.string('name')
    table.string('address')
    table.string('category')
    table.integer('reliability_positive')
    table.integer('reliability_negative')
    table.integer('rating')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('businesses')
}
