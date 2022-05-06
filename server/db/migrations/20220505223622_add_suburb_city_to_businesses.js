/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('businesses', (table) => {
    table.string('suburb')
    table.string('city')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('businesses', (table) => {
    table.dropColumn('suburb')
    table.dropColumn('city')
  })
}
