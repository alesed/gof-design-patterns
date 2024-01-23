class Clone {
  constructor(public name: string) {}

  clone(): Clone {
    return new Clone(this.name);
  }
}

const clone1 = new Clone("Clone 1");
const clone2 = clone1.clone();
console.log(`Clone 1: ${JSON.stringify(clone1)}`);
