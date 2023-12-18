export const _isNumber = (e: KeyboardEvent, noDecimal = false) => {
  if (
    e.key.length === 1 && e.key !== '.' && isNaN(parseInt(e.key)) && !e.ctrlKey ||
    e.key === '.' && (e.target as HTMLInputElement).value.toString().indexOf('.') > -1 ||
    e.key === '.' && noDecimal
  ) {
    e.preventDefault();
  }
}