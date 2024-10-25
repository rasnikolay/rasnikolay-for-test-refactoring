function calculateTotalPrice(quantity: number, price: number): number {
  return quantity * price;
}

function formatPhoneNumber(phoneNumber: string): string {
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}

/* Плохо: нет аннотаций, нейминг аргумента в formatPhoneNumber
   Улучшено: добавлены аннотации, заменена number на formatPhoneNumber
 */