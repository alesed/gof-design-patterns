function abstractFactory(property: string): AC {
  if (property === "a") {
    return new A();
  }
  if (property === "b") {
    return new B();
  }
  throw new Error("Invalid property");
}

abstract class AC {
  abstract sayHello(): void;
}

class A extends AC {
  sayHello(): void {
    console.log("Hello from A");
  }
}

class B extends AC {
  sayHello() {
    console.log("Hello from B");
  }
}

const a = abstractFactory("a");
const b = abstractFactory("b");
a.sayHello();
b.sayHello();
