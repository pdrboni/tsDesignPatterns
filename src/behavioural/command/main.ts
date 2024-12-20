import { IntensityCommand } from './intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Reciever
const bedroomLight = new SmartHouseLight('Bedroom Light');
const bathroomLight = new SmartHouseLight('Bathroom Light');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bathroomIntensityCommand = new IntensityCommand(bathroomLight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bathroomIntensityCommand);

smartHouseApp.executeCommand(`btn-1`);
smartHouseApp.executeCommand(`btn-1`);
smartHouseApp.executeCommand(`btn-1`);
console.log();
smartHouseApp.executeCommand(`btn-2`);
smartHouseApp.executeCommand(`btn-2`);
smartHouseApp.executeCommand(`btn-2`);
smartHouseApp.executeCommand(`btn-2`);
console.log();
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.undoCommand(`btn-3`);
smartHouseApp.undoCommand(`btn-3`);
smartHouseApp.undoCommand(`btn-3`);
smartHouseApp.undoCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
smartHouseApp.executeCommand(`btn-3`);
