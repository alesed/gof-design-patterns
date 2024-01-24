abstract class Tax {
  calculate(amount: number): number {
    return amount + amount * this.taxRate(amount);
  }

  abstract taxRate(amount: number): number;
}

class Tax1 extends Tax {
  taxRate(amount: number): number {
    return 0.1;
  }
}

class Tax2 extends Tax {
  taxRate(amount: number): number {
    return 0.2;
  }
}

const tax1 = new Tax1();
const tax2 = new Tax2();
console.log(tax1.calculate(100)); // <-- 110
console.log(tax2.calculate(100)); // <-- 120
