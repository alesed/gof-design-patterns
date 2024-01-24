class Product {
  private observers: Observer[] = [];

  constructor(private price: number) {}

  setNewPrice(newPrice: number) {
    this.price = newPrice;
    this.notifyObservers();
  }

  register(observer: Observer) {
    this.observers.push(observer);
  }

  unregister(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.price));
  }
}

class Observer {
  private observedPrice: number = 0;

  update(price: number) {
    this.observedPrice = price;
  }

  getObservedPrice(): number {
    return this.observedPrice;
  }
}

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

const product = new Product(100);

product.register(observer1);
product.register(observer2);
product.register(observer3);

product.setNewPrice(50);

product.unregister(observer3);

product.setNewPrice(75);

console.log(observer1.getObservedPrice()); // <-- 75
console.log(observer2.getObservedPrice()); // <-- 75
console.log(observer3.getObservedPrice()); // <-- 50
