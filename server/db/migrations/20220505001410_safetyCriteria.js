/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('safetyCriteria', (table) => {
    table.increments().primary()
    table
      .string('business_id')
      .references('business.id')
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
  return knex.schema.dropTable('safetyCriteria')
}
