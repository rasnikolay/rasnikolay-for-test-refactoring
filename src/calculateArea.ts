enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {

  switch (shape) {
    case ShapeType.Circle:
      return  Math.PI * Math.pow(radiusOrSide, 2);
    case ShapeType.Square:
      return Math.pow(radiusOrSide, 2);
    default:
      return 0;
  }
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54

/* Плохо: switch было бы неплохо использовать, если бы перечисление было бы больше и точно излишняя переменная area

   Улучшено: можно заменить switch на if, но так как пример абстрактный, возможно перечислений - типов фигур будет больше
 */
