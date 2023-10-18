export const numberToCurrency = (number: number) => {
  return number.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
