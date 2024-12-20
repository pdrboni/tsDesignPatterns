import { SmartHouseCommand } from './smart-house-command-protocol';
import { SmartHouseLight } from './smart-house-light';

export class IntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`${this.light.name} intensity is ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`${this.light.name} intensity is ${intensity}`);
  }
}
