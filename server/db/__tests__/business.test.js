const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const db = require('../business')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getBusinessAndSafetyInfoById', () => {
  it('should return a business object', () => {
    return db.getBusinessAndSafetyInfoById(1, testDb).then((business) => {
      expect(business).toHaveProperty('handSanitizer')
      expect(business).toHaveProperty('rating')
      expect(business.name).toContain("Sharon's Hairdressing")
    })
  })
})
