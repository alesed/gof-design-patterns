class Car {
  drive() {
    console.log("Car has been driven!");
  }
}

class CarProxy {
  constructor(public driver: Driver) {}

  drive(): void {
    return this.driver.age < 18
      ? console.log("Too young to drive!")
      : new Car().drive();
  }
}

class Driver {
  constructor(public age: number) {}
}

const driver = new Driver(17);
const car = new CarProxy(driver);
car.drive();
