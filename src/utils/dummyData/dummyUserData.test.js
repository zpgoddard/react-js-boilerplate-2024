/* eslint-disable no-magic-numbers */

import { generateUniqueUsername, generateUserArray } from './dummyUserData';

// Test suite for generateUniqueUsername
describe('generateUniqueUsername', () => {
  it('should generate a username that is a combination of adjective, verb, and noun', () => {
    const username = generateUniqueUsername(0);
    expect(username.split(' ')).toHaveLength(3); // Expect 3 words (adjective, verb, noun)
  });

  it('should generate the same username for the same index', () => {
    const username1 = generateUniqueUsername(5);
    const username2 = generateUniqueUsername(5);
    expect(username1).toEqual(username2);
  });

  it('should generate different usernames for different indices', () => {
    const username1 = generateUniqueUsername(0);
    const username2 = generateUniqueUsername(1);
    expect(username1).not.toEqual(username2);
  });
});


// Test suite for generateUserArray
describe('generateUserArray', () => {
  it('should generate an array of the specified length', () => {
    const users = generateUserArray(5);
    expect(users).toHaveLength(5);
  });

  it('should generate each user with id, username, pfp, and score fields', () => {
    const users = generateUserArray(1);
    const user = users[0];

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('pfp');
    expect(user).toHaveProperty('score');
  });

  it('should generate different ids and usernames for each user', () => {
    const users = generateUserArray(2);
    expect(users[0].id).not.toEqual(users[1].id);
    expect(users[0].username).not.toEqual(users[1].username);
  });

  it('should generate a valid URL for the profile picture', () => {
    const users = generateUserArray(1);
    const user = users[0];
    const pfpUrl = new URL(user.pfp);
    expect(pfpUrl.href).toContain('https://i.pravatar.cc');
  });

  it('should allow customizing the ID length', () => {
    const users = generateUserArray(1, 12);
    expect(users[0].id).toHaveLength(12);
  });
});