import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  upVolume(): void {
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(`${this.device.getName()} voume: ${this.device.getVolume()}`);
  }

  downVolume(): void {
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(`${this.device.getName()} voume: ${this.device.getVolume()}`);
  }
}
