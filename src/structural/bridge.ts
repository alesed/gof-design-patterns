// Bridge to connect different devices
class RemoteControl {
  protected device: IDevice;
  constructor(device: IDevice) {
    this.device = device;
  }

  togglePower(): void {
    this.device.isEnabled() ? this.device.disable() : this.device.enable();
  }
  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }
  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }
  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }
  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

// Extension of bridge
class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}

interface IDevice {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

// Complex device
class Device implements IDevice {
  private power: boolean;
  private volume: number;
  private channel: number;

  constructor() {
    this.power = false;
    this.volume = 0;
    this.channel = 0;
  }
  isEnabled(): boolean {
    return this.power;
  }
  enable(): void {
    this.power = true;
  }
  disable(): void {
    this.power = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(percent: number): void {
    this.volume = percent;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
}

class Tv extends Device {}
class Radio extends Device {}

const tv = new Tv();
const radio = new Radio();
const remoteControl = new RemoteControl(tv);
const advancedRemoteControl = new AdvancedRemoteControl(radio);

remoteControl.togglePower();
remoteControl.channelUp();
remoteControl.volumeUp();
remoteControl.volumeUp();

advancedRemoteControl.togglePower();
advancedRemoteControl.mute();
