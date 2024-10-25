interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
  percentFull(): number;
}

class UnlimitedStack<T> implements Stack<T> {
  percentFull(): number {
    return 0;
  }
}

/* Возможно внутри UnlimitedStack в методе percentFull нужно выбрасывать ошибку */