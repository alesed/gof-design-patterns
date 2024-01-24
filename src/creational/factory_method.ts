class SkodaFactory {
  static create(type: string) {
    if (type === "Fabia") {
      return new Skoda(type, 10000, 160);
    }
    if (type === "Octavia") {
      return new Skoda(type, 15000, 200);
    }
    throw new Error("Invalid type");
  }
}

class Skoda {
  constructor(
    private type: string,
    private price: number,
    private maxSpeed: number
  ) {
    console.log(`Skoda ${type} created`);
  }
}
