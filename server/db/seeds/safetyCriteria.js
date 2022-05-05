/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('safetyCriteria').del()
  await knex('safetyCriteria').insert([
    {
      id: 1,
      business_id: '1',
      ventilation: 1,
      vaccinePass: 1,
      vaccineStaff: 1,
      handSanitizer: 1,
      cleaningProtocol: 1,
      minSpacing: 1,
      masking: 1,
    },
    {
      id: 2,
      business_id: '2',
      ventilation: 1,
      vaccinePass: 1,
      vaccineStaff: 0,
      handSanitizer: 1,
      cleaningProtocol: 1,
      minSpacing: 1,
      masking: 1,
    },
    {
      id: 3,
      business_id: '3',
      ventilation: 1,
      vaccinePass: 0,
      vaccineStaff: 1,
      handSanitizer: 1,
      cleaningProtocol: 1,
      minSpacing: 1,
      masking: 1,
    },
    {
      id: 4,
      business_id: '4',
      ventilation: 1,
      vaccinePass: 1,
      vaccineStaff: 1,
      handSanitizer: 1,
      cleaningProtocol: 0,
      minSpacing: 1,
      masking: 1,
    },
    {
      id: 5,
      business_id: '5',
      ventilation: 1,
      vaccinePass: 1,
      vaccineStaff: 1,
      handSanitizer: 1,
      cleaningProtocol: 1,
      minSpacing: 0,
      masking: 1,
    },
    {
      id: 6,
      business_id: '6',
      ventilation: 0,
      vaccinePass: 1,
      vaccineStaff: 1,
      handSanitizer: 1,
      cleaningProtocol: 1,
      minSpacing: 1,
      masking: 1,
    },
  ])
}
