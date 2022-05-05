/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Businesses').del()
  await knex('Businesses').insert([
    {
      id: 1,
      auth0_ID: '1',
      name: 'Sharons Hairdressing',
      address: '123 lane rd, Grey Lynn, Auckland',
      category: 'Hairdressers',
      reliabilityScore: 4,
      rating: 80,
    },
    {
      id: 2,
      auth0_ID: '2',
      name: 'Petes Hardware',
      address: '70 Hardout st, Grey Lynn, Auckland',
      category: 'Hardware store',
      reliabilityScore: 10,
      rating: 88,
    },
    {
      id: 3,
      auth0_ID: '3',
      name: 'Eye Pop',
      address: '4 Vision st, Grey Lynn, Auckland',
      category: 'Optometrist',
      reliabilityScore: 4,
      rating: 90,
    },
    {
      id: 4,
      auth0_ID: '4',
      name: 'Coffee Candy',
      address: '10 Espresso st, Grey Lynn, Auckland',
      category: 'Cafe',
      reliabilityScore: 20,
      rating: 98,
    },
    {
      id: 5,
      auth0_ID: '5',
      name: 'Delilahs Dentist',
      address: '50 Filling st, Grey Lynn, Auckland',
      category: 'Dentist',
      reliabilityScore: 66,
      rating: 50,
    },
    {
      id: 6,
      auth0_ID: '6',
      name: 'Espresso Myself',
      address: '80 Loud st, Grey Lynn, Auckland',
      category: 'Cafe',
      reliabilityScore: 4,
      rating: 67,
    },
  ])
}
