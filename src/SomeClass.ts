class SomeClass {
    public someMethod() {
      try {
          this.doSomethingSafe();
      } catch (Exception e) {
          e.printStackTrace();
      }
  }

  private doSomethingSafe() {
     console.log('Safe operation')
  }
}

/* Плохо: имеется неиспользуемый метод, if (false) никогда не выполнится
*  Улучшено: удалено лишнее */