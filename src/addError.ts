type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY
}

type TWarning = {
  type: WarningType
};

const Warning = (type: WarningType): TWarning => {
  return {
    type
  };
};


const addError = (errors: TMutableList<TWarning>) => {
  errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};
