abstract class Status {
  abstract getNextStatus(): Status;

  next(): Status {
    return this.getNextStatus();
  }
}

class WaitingForPayment extends Status {
  getNextStatus(): Status {
    return new Shipping();
  }
}

class Shipping extends Status {
  getNextStatus(): Status {
    return new Delivered();
  }
}

class Delivered extends Status {
  getNextStatus(): Status {
    return this; // No next status after Delivered
  }
}

class Order {
  private status: Status;

  constructor() {
    this.status = new WaitingForPayment();
  }

  nextStatus(): void {
    this.status = this.status.next();
  }

  getStatus(): Status {
    return this.status;
  }
}

const order = new Order();
order.nextStatus(); // WaitingForPayment -> Shipping
order.nextStatus(); // Shipping -> Delivered
order.nextStatus(); // Delivered -> Delivered
