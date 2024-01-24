interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

class FileDataSource implements DataSource {
  constructor(private filename: string) {}

  writeData(data: string): void {
    console.log(`Writing data to file: ${data}`);
  }

  readData(): string {
    return "data";
  }
}

// Common wrapper
class DataSourceBaseDecorator implements DataSource {
  constructor(private wrappee: DataSource) {}

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  readData(): string {
    return this.wrappee.readData();
  }
}

class EncryptionDecorator extends DataSourceBaseDecorator {
  writeData(data: string): void {
    console.log(`Encrypting data: ${data}`);
    super.writeData(data);
  }

  readData(): string {
    console.log("Decrypting data");
    return super.readData();
  }
}

const source = new FileDataSource("somefile.dat");
source.writeData("Hello world");

const encryptedSource = new EncryptionDecorator(source);
encryptedSource.writeData("Hello world");
encryptedSource.readData();
