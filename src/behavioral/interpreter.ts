interface Expression {
  interpret(): number;
}

class Num implements Expression {
  constructor(private value: number) {}

  interpret(): number {
    return this.value;
  }
}

class Sum implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class Sub {
  constructor(private left: Expression, private right: Expression) {}

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

const result = new Sum(new Num(10), new Sub(new Num(5), new Num(3)));
console.log(result.interpret());
