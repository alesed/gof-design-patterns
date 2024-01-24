class Memento<T> {
  constructor(private state: T) {}

  getState(): T {
    return this.state;
  }
}

class Originator<T> {
  constructor(private state: T) {}

  setState(state: T) {
    this.state = state;
  }

  save(): Memento<T> {
    return new Memento(this.state);
  }

  restore(memento: Memento<T>) {
    this.state = memento.getState();
  }
}

class Caretaker {
  constructor(private mementos: Memento<Caretaker>[] = []) {}

  addMemento(memento: Memento<Caretaker>) {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento<Caretaker> {
    return this.mementos[index];
  }
}

const caretaker = new Caretaker();
const originator = new Originator<Caretaker>(caretaker);
caretaker.addMemento(originator.save());
