export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  toggleIsOn(): boolean {
    this.isOn = !this.isOn;
    console.log(`${this.name} is ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}
