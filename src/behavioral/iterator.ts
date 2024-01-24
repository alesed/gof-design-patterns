class Iterator {
  private collection: any[];
  private position: number = 0;

  constructor(collection: any[]) {
    this.collection = collection;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }

  public next(): any {
    const item = this.collection[this.position];
    this.position += 1;
    return item;
  }
}

const collection = ["Audi", "BMW", "Tesla", "Mercedes"];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
