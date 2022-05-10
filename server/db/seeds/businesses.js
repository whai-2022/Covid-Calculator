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
      name: "Sharon's Hairdressing",
      address: '123 Lane Rd, Grey Lynn, Auckland',
      category: 'Hairdressers',
      reliability_positive: 4,
      reliability_negative: 5,
      rating: 80,
      suburb: 'Grey Lynn',
      city: 'Auckland',
    },
    {
      id: 2,
      auth0_ID: '2',
      name: "Pete's Hardware",
      address: '70 Hardout St, Grey Lynn, Auckland',
      category: 'Hardware store',
      reliability_positive: 20,
      reliability_negative: 4,
      rating: 88,
      suburb: 'Grey Lynn',
      city: 'Auckland',
    },
    {
      id: 3,
      auth0_ID: '3',
      name: 'Eye Pop',
      address: '4 Vision St, Grey Lynn, Auckland',
      category: 'Optometrist',
      reliability_positive: 34,
      reliability_negative: 7,
      rating: 90,
      suburb: 'Grey Lynn',
      city: 'Auckland',
    },
    {
      id: 4,
      auth0_ID: '4',
      name: 'Coffee Candy',
      address: '10 Espresso St, Grey Lynn, Auckland',
      category: 'Cafe',
      reliability_positive: 34,
      reliability_negative: 43,
      rating: 98,
      suburb: 'Grey Lynn',
      city: 'Auckland',
    },
    {
      id: 5,
      auth0_ID: '5',
      name: "Delilah's Dentist",
      address: '50 Filling St, Grey Lynn, Auckland',
      category: 'Dentist',
      reliability_positive: 45,
      reliability_negative: 7,
      rating: 50,
      suburb: 'Grey Lynn',
      city: 'Auckland',
    },
    {
      id: 6,
      auth0_ID: '6',
      name: 'Espresso Myself',
      address: '80 Loud St, Grey Lynn, Auckland',
      category: 'Cafe',
      reliability_positive: 43,
      reliability_negative: 6,
      rating: 67,
      suburb: 'Grey Lynn',
      city: 'Auckland',
    },
  ])
}
