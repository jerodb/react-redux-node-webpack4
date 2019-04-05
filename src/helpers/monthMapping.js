/*
 ** Map numbers 0-11 to 3 letters month identifier.
 */
export default index => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ]
  return months[parseInt(index, 10) - 1]
}
