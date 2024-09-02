test('Request exists', () => {
  const r = new Request('https://example.com')
  expect(r).toBeTruthy()
})