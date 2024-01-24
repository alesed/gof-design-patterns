class ShoppingCart {
  constructor(private products: number[] = []) {}

  addProduct(productPrice: number): void {
    this.products.push(productPrice);
  }

  getDiscount(): number {
    const total = this.products.reduce((acc, cur) => acc + cur);
    const nDiscount = new NumberDiscount();
    const pDiscount = new PriceDiscount();
    nDiscount.setNext(pDiscount);
    return total * nDiscount.exec(this.products);
  }
}

interface IDiscount {
  setNext(discount: IDiscount): void;
  exec(products: number[]): number;
}

class NoneDiscount implements IDiscount {
  setNext(discount: IDiscount): void {
    return;
  }

  exec(products: number[]): number {
    return 0;
  }
}

class NumberDiscount implements IDiscount {
  private next: IDiscount;

  constructor() {
    this.next = new NoneDiscount();
  }

  setNext(discount: IDiscount): void {
    this.next = discount;
  }

  exec(products: number[]): number {
    if (products.length > 3) return 0.05;
    return 0.05 + this.next.exec(products);
  }
}

class PriceDiscount implements IDiscount {
  private next: IDiscount;

  constructor() {
    this.next = new NoneDiscount();
  }

  setNext(discount: IDiscount): void {
    this.next = discount;
  }

  exec(products: number[]): number {
    const total = products.reduce((acc, cur) => acc + cur);
    if (total > 500) return 0.1;
    return 0.1 + this.next.exec(products);
  }
}

const cart = new ShoppingCart();
cart.addProduct(10);
cart.addProduct(20);
cart.addProduct(30);
console.log(cart.getDiscount());
