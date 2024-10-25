class Order {
  private customer: Customer;

  constructor(customer: Customer) {
    this.customer = customer;
  }

  getTotalPrice(): number {
    return this.customer.calculateTotalPrice();
  }
}

class Customer {
  private items: Item[];

  calculateTotalPrice(): number {
    // вычисление общей цены на основе items
  }
}

/* Всё же экземляр в конструкторе можно заменить на такой функционал - но пока не знаю зачем это нужно */