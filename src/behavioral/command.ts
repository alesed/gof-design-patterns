abstract class Command {
  abstract execute(): void;
}

class CopyCommand extends Command {
  execute(): void {
    console.log("Copying...");
  }
}

class PasteCommand extends Command {
  execute(): void {
    console.log("Pasting...");
  }
}

class Button {
  constructor(public command: Command) {}

  click(): void {
    this.command.execute();
  }
}

const button1 = new Button(new CopyCommand());
const button2 = new Button(new PasteCommand());
button1.click();
button2.click();
