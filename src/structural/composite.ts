interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}

class Dot implements Graphic {
  constructor(private x: number, private y: number) {}

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log(`Drawing dot at ${this.x}, ${this.y}`);
  }
}

class Circle implements Graphic {
  constructor(private x: number, private y: number, private radius: number) {}

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log(
      `Drawing circle at ${this.x}, ${this.y} with radius ${this.radius}`
    );
  }
}

class CompoundGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic): void {
    this.children.push(child);
  }

  remove(child: Graphic): void {
    this.children = this.children.filter((c) => c !== child);
  }

  move(x: number, y: number): void {
    this.children.forEach((child) => child.move(x, y));
  }

  draw(): void {
    this.children.forEach((child) => child.draw());
  }
}

class ImageEditor {
  private all: CompoundGraphic = new CompoundGraphic();

  load(): void {
    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(5, 3, 10));
  }

  groupSelected(components: Graphic[]): void {
    const group = new CompoundGraphic();
    components.forEach((component) => {
      group.add(component);
      this.all.remove(component);
    });
    this.all.add(group);
    this.all.draw();
  }
}

const editor = new ImageEditor();
editor.load();
editor.groupSelected([new Dot(1, 2), new Circle(5, 3, 10)]);
