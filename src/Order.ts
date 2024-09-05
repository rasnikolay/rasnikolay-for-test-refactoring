class Order {
  private customer: Customer;

  constructor() {
    this.customer = new Customer();
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
