import { timeAgo } from '@/lib/utils'

describe('timeAgo', () => {
  test('returns "never" when timestamp is not provided', () => {
    const result = timeAgo(undefined)
    expect(result).toBe('never')
  })

  test('returns the correct time ago string', () => {
    const now = Date.now()
    const timestamp = new Date(now - 5000) // 5 seconds ago

    const result = timeAgo(timestamp)
    expect(result).toBe('5 seconds ago')
  })

  test('returns only the time when timeOnly flag is set to true', () => {
    const now = Date.now()
    const timestamp = new Date(now - 60000) // 1 minute ago

    const result = timeAgo(timestamp, true)
    expect(result).toBe('1 minute')
  })
})