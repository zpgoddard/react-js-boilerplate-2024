import { generateRandomId } from './dummyDataHelpers';

// Constants
const WORD_LENGTH_LIMIT = 5;
const MAX_SCORE = 999_999;
const DEFAULT_ID_LENGTH = 8;

// Utility function to truncate words to the length limit
const truncateWord = (word: string): string => 
  word.length > WORD_LENGTH_LIMIT ? word.substring(0, WORD_LENGTH_LIMIT) : word;

// Arrays of adjectives, verbs, and nouns with words truncated to the length limit
const adjectives = [
  'Epic', 'Brave', 'Wise', 'Noble', 'Fierce', 'Bold', 
  'Swift', 'Mighty', 'Loyal', 'Witty', 'Vivid', 'Sturdy', 
  'Shiny', 'Neat', 'Grand', 'Strong', 'Proud', 'Sharp', 
  'Quick', 'Lively', 'Daring', 'Sly', 'Quiet', 'Alert', 
  'Slick', 'Flash', 'Bright', 'Tough', 'Eager', 'Calm',
].map(truncateWord);

const verbs = [
  'Jump', 'Soar', 'Roar', 'Run', 'Fly', 'Dive', 
  'Dash', 'Glide', 'Hunt', 'Creep', 'Sprint', 'Climb', 
  'Bound', 'Leap', 'Charge', 'Swing', 'Slide', 'Chase', 
  'Spur', 'Trek', 'Twist', 'Spin', 'Zoom', 'Skim', 
  'Swoop', 'Shine', 'Blaze', 'Hike', 'Drift', 'Flash',
].map(truncateWord);

const nouns = [
  'Wolf', 'Eagle', 'Bear', 'Hawk', 'Lion', 'Shark', 
  'Tusk', 'Frog', 'Crab', 'Otter', 'Seal', 'Mule', 
  'Duck', 'Cobra', 'Crow', 'Lynx', 'Puma', 'Hare', 
  'Bison', 'Tuna', 'Moth', 'Owl', 'Fish', 'Viper', 
  'Fox', 'Bat', 'Wren', 'Swan', 'Mole', 'Pike',
].map(truncateWord);

// Function to generate a random score between 0 and MAX_SCORE
const generateRandomScore = (): number => Math.floor(Math.random() * MAX_SCORE);

// Function to generate a unique username by combining an adjective, verb, and noun
export const generateUniqueUsername = (index: number): string => {
  const adjective = adjectives[index % adjectives.length];
  const verb = verbs[index % verbs.length];
  const noun = nouns[index % nouns.length];
  
  return `${adjective}${verb}${noun}`;
};

// Exported function to generate an array of dummy users with the specified length
export const generateUsersArray = (length: number, idLength = DEFAULT_ID_LENGTH) => Array.from({ length }, (_, index) => {
  const id = generateRandomId(idLength);
  const username = generateUniqueUsername(index);
  const score = generateRandomScore();
  return {
    id,
    username,
    pfp: `https://i.pravatar.cc/150?u=${id}`, 
    score,
    index
  };
});

export default { generateUniqueUsername, generateUsersArray };