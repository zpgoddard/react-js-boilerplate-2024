/* eslint-disable no-magic-numbers */

import { generateRandomId } from './dummyDataHelpers';

// Test suite for generateRandomId
describe('generateRandomId', () => {
  it('should generate a random ID with the default length of 8', () => {
    const id = generateRandomId();
    expect(id).toHaveLength(8);
  });

  it('should generate a random ID with the specified length', () => {
    const id = generateRandomId(12);
    expect(id).toHaveLength(12);
  });

  it('should generate different IDs on subsequent calls', () => {
    const id1 = generateRandomId();
    const id2 = generateRandomId();
    expect(id1).not.toEqual(id2);
  });
});