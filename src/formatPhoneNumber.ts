function calculateTotalPrice(quantity, price) {
  return quantity * price;
}

function formatPhoneNumber(number) {
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}
