function calculateArea(radius: number): number {
  return Math.PI * radius * radius; // "волшебное число" 3.14
}

/* Плохо: волшебное/магическое число

   Улучшено: число можно вынести в константу, но тут нас выручит Math
 */