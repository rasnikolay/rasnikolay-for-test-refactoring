class A {
  // ...
  getB() {
    return new B();
  }
}

class B {
  // ...
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения
const a = new A();
a.getB().getC().doSomething();

//объект должен общаться только с друзьями, а не с друзьями друзей
