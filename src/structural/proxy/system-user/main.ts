import { SystemUserProxy } from './system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Pedro', 'pedroboni');

  console.log('this will be 2 seconds long');

  console.log(await user.getAddresses());

  console.log('repeating... (CACHE)');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
