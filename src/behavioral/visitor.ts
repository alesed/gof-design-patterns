class SalaryVisitor {
  visit(employee: Employee) {
    if (employee instanceof Manager) {
      employee.bonus += 1000;
    } else if (employee instanceof Developer) {
      employee.bonus += 500;
    }
    employee.bonus = 0;
  }
}

abstract class Employee {
  bonus = 0;

  abstract accept(visitor: SalaryVisitor): void;
}

class Manager extends Employee {
  accept(visitor: SalaryVisitor): void {
    visitor.visit(this);
  }
}

class Developer extends Employee {
  accept(visitor: SalaryVisitor): void {
    visitor.visit(this);
  }
}

const manager = new Manager();
const developer = new Developer();
const visitor = new SalaryVisitor();
manager.accept(visitor);
developer.accept(visitor);
console.log(manager.bonus); // <-- 1000
console.log(developer.bonus); // <-- 500
