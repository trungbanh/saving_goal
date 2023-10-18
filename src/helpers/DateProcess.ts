export const getDateMonthYear = (value: number) => {
  const today = new Date()
  const newDate = new Date(today.setMonth(today.getMonth() + value))
  const [date, time] = newDate
    .toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    .split(', ')
  return date.split(' ')
}
