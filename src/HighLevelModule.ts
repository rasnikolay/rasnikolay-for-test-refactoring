class LowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: LowLevelModule;

  constructor() {
    this.lowLevelModule = new LowLevelModule(); // создание экземпляра
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething(); // использование непосредственной зависимости
  }
}
