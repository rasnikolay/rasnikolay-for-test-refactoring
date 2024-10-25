class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    return a / b;
  }
}

/* Плохо: не хватает общего метода operator для контроля общего функционала калькулятора */