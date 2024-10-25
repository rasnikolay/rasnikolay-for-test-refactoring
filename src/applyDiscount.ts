
// Модуль 1
function calculateTotalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Модуль 2
function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * (1 - discountPercentage / 100);
}

/* Плохо: нет необходимости награмождения кода в calculateTotalPrice

   Улучшено: для данной задачи идеально использовать reduce и при этом не создавая локальную переменную totalPrice
 */