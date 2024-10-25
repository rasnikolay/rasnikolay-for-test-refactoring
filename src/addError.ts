type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => {
  return {
    type,
  };
};

const addError = (errors: TMutableList<TWarning>) => {
  return [...errors, Warning(WarningType.LEGACY_CODE_DEPENDENCY)];
};

/* Плохо: мы мутируем массив errors, это плохо в рамках принципов чистой функции

  Улучшено: Для копии исходного массива добавляем новое значение и таким образом возращаем новый массив

 */