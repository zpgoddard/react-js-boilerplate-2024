import { getLocalTime } from '../time/time';
import { log } from './consoleLogger';

describe ('console logger', () => {

  const consoleMsg = 'Hello world!';
  const consoleObj = { 
    valueOne: 'Foo', 
    valueTwo: 'Bar' 
  };

  console.log = jest.fn();

  it ('Logs a message to the console.', () => {
    log(consoleMsg);
    expect(console.log).toHaveBeenCalledWith(`${getLocalTime(true, true, true)} \n`, consoleMsg);
  });

  it ('Logs a message and object to the console.', () => {
    log(consoleMsg, consoleObj);
    expect(console.log).toHaveBeenCalledWith(`${getLocalTime(true, true, true)} \n`, consoleMsg, consoleObj);
  });

});