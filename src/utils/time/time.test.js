import {getLocalTime} from './time';

describe ('time functions', () => {

  jest.useFakeTimers().setSystemTime(new Date('Wed Jan 01 2000 12:23:34 GMT+0000'));

  it ('Returns the current time in hours, minutes, and seconds.', () => {
    const returnValue = getLocalTime(true, true, true);
    expect(returnValue).toBe('12:23:34');
  });

});