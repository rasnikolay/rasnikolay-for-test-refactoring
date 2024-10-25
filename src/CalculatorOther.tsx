class CalculatorOther {
  add(a: number, b: number): number {
    return a + b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
}

/* Плохо: фунцию add можно перенести в класс калькулятор и нет аннотаций

   Улучшено:
 */
