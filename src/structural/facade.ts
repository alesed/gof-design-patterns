class ShopFacade {
  private fees: Fees;
  private shipping: Shipping;
  private discount: Discount;

  constructor() {
    this.fees = new Fees();
    this.shipping = new Shipping();
    this.discount = new Discount();
  }

  public calculate(value: number): number {
    value = this.discount.calculate(value);
    value = this.fees.calculate(value);
    value = this.shipping.calculate(value);
    return value;
  }
}

class Fees {
  calculate(value: number): number {
    return value * 1.1;
  }
}

class Shipping {
  calculate(value: number): number {
    return value * 1.2;
  }
}

class Discount {
  calculate(value: number): number {
    return value * 0.9;
  }
}

const shop = new ShopFacade();
console.log(shop.calculate(100));
