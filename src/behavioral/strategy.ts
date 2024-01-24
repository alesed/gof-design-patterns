class ShoppingCart {
  private totalValue: number;

  constructor(private discount: (value: number) => number) {
    this.totalValue = 0;
  }

  setTotalValue(value: number): void {
    this.totalValue = value;
  }

  checkout(): number {
    return this.discount(this.totalValue);
  }
}

const guestStrategy = (value: number): number => value;
const regularStrategy = (value: number): number => value * 0.95;
const premiumStrategy = (value: number): number => value * 0.9;

const shoppingCart1 = new ShoppingCart(guestStrategy);
shoppingCart1.setTotalValue(100);
console.log(shoppingCart1.checkout()); // <-- 100

const shoppingCart2 = new ShoppingCart(regularStrategy);
shoppingCart2.setTotalValue(100);
console.log(shoppingCart2.checkout()); // <-- 95

const shoppingCart3 = new ShoppingCart(premiumStrategy);
shoppingCart3.setTotalValue(100);
console.log(shoppingCart3.checkout()); // <-- 90
