/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('safety_criteria', (table) => {
    table.increments().primary()
    table
      .integer('business_id')
      .unsigned()
      .references('id')
      .inTable('businesses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('ventilation')
    table.integer('vaccinePass')
    table.integer('vaccineStaff')
    table.integer('handSanitizer')
    table.integer('cleaningProtocol')
    table.integer('minSpacing')
    table.integer('masking')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('safety_criteria')
}
