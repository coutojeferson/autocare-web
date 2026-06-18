import formatKm from "../../src/utils/formatKm"

describe('fromatKm', () => {
  it('should format km with dots and suffix', () => {
    expect(formatKm(50000)).toBe("50.000 km")
  })
})