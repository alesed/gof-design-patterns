class Database {
  private counter = 0;
  private static instance: Database;

  private constructor() {}

  static getInstance(): Database {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = new Database();
    return Database.instance;
  }

  incrementValue(): void {
    this.counter++;
  }

  getValue(): number {
    return this.counter;
  }
}

const singleton = Database.getInstance();
singleton.incrementValue();
singleton.incrementValue();
singleton.incrementValue();
const singleton2 = Database.getInstance();
console.log(singleton2.getValue()); // <-- 3
