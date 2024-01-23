class Square {
  constructor(public side: number) {}
  getArea(): number {
    return this.side * this.side;
  }
}

class RetardedSquare {
  constructor(public side: number) {}
  getWidth(): number {
    return this.side;
  }
}

class RetardedSquareAdapter extends RetardedSquare {
  constructor(public retardedSquare: RetardedSquare) {
    super(retardedSquare.getWidth());
  }

  getArea(): number {
    return this.retardedSquare.getWidth() * this.retardedSquare.getWidth();
  }
}

const square = new Square(5);
const retardedSquare = new RetardedSquare(5);
const retardedSquareAdapter = new RetardedSquareAdapter(retardedSquare);
console.log(`Square area: ${square.getArea()}`);
console.log(`Retarded square area: ${retardedSquareAdapter.getArea()}`);
