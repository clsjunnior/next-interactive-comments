import ms from 'ms'

export const timeAgo = (timestamp: Date | undefined, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  const elapsed = Date.now() - new Date(timestamp).getTime()
  const timeAgoString = ms(elapsed, { long: true }) 
    .replace(/(\d+)\s(\w+)\sago/, '$1 $2')
  return timeOnly ? timeAgoString : `${timeAgoString} ago`
}