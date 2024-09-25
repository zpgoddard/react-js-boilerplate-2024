import { generateRandomId } from './dummyDataHelpers';
import { generateUsersArray } from './dummyUserData';

// Constants
const DEFAULT_USER_COUNT = 1;  // Used when generating one user
const MIN_MSG_ID_LENGTH = 10;  // Minimum length for message IDs
const FIRST_WORD_INDEX = 0;    // Used to select the first word of the username

// Utility function to generate a random message
export const generateRandomMessage = (): string => {
  const messages = [
    'Hi, how’s it going everyone? You good? I’m pretty good myself.',
    'What’s up today?',
    'Anyone seen the latest movie?',
    'Can’t wait for the weekend!',
    'How’s everyone’s day going?',
    'I just finished reading a great book!',
    'Any plans for tonight?',
    'Let’s grab some coffee later.',
    'This weather is amazing!',
    'What did you have for lunch?',
    'Anyone up for a game later?',
    'Just finished some work, time to relax!',
    'I’m learning a new hobby!',
    'How’s your project coming along?',
    'Let’s plan something fun this weekend!',
    'Who’s excited for the holidays?',
    'I had an amazing dinner!',
    'Just went on a walk, feeling refreshed!',
    'What’s your favorite movie?',
    'I’m thinking of starting a new show, any suggestions?'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

// Generates an array of fake chat messages
export const generateChatMessages = (numMessages: number) => Array.from({ length: numMessages }).map(() => {
  const user = generateUsersArray(DEFAULT_USER_COUNT)[0];  // Generate a unique user for each message
  const msgId = generateRandomId(MIN_MSG_ID_LENGTH);
  const msg = generateRandomMessage();

  return {
    userId: user.id,
    msgId,
    pfp: user.pfp,
    username: user.username.split(' ')[FIRST_WORD_INDEX],  // First name/word only
    msg
  };
});