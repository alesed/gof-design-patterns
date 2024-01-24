class Color {
  constructor(public name: string) {}
}

class ColorFactory {
  private colors: { [key: string]: Color } = {};

  public getColor(name: string): Color {
    if (!this.colors[name]) {
      this.colors[name] = new Color(name);
    }
    return this.colors[name];
  }
}

const colorFactory = new ColorFactory();
const color1 = colorFactory.getColor("red");
const color2 = colorFactory.getColor("red"); // Same object
const color3 = colorFactory.getColor("blue");
