class CarOther {
  public static readonly COLORS = new Set(['red', 'blue', 'green']);

  public static isColorAvailable(color: string): boolean {
    return this.COLORS.has(color);
  }
}

/* Плохо: раз мы проверяем на наличие цвета в COLORS, то можно использовать конструкцию Set для уникальности

   Улучшено: переписано на new Set
   Так же: можно исправить названия файла - но не понятно необходимо ли
 */