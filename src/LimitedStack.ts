interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
}

class EmptyException extends Error {}
class FullException extends Error {}

interface BoundedStack<T> extends Stack<T> {
  percentFull(): number;
}

class LimitedStack<T> implements BoundedStack<T> {
  pop(): T | null {
    throw new Error("Method not implemented.");
  }
  push(item: T): void {
    throw new Error("Method not implemented.");
  }
  percentFull(): number {
    // Конкретная реализация для ограниченного стека
    return 0
  }
}
