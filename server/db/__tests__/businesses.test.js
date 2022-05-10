const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const db = require('../businesses')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getBusinesses', () => {
  it('should return an array of business objects', () => {
    return db.getBusinesses(testDb).then((businesses) => {
      expect(businesses[0]).toHaveProperty('address')
      expect(businesses[1]).toHaveProperty('reliabilityPositive')
      expect(businesses[0].name).toContain("Sharon's Hairdressing")
    })
  })
})
