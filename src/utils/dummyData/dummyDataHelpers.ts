// constants
const MIN_ID_OFFSET = 2;  // Offset to ensure the ID starts at a random point
const RADIX_BASE = 36;  // Base for generating random strings
const DEFAULT_ID_LENGTH = 8; // The number of ID length if none is given

// Function to generate a random ID of specific length
// Generates a random alphanumeric ID string of `idLength`
export const generateRandomId = (idLength = DEFAULT_ID_LENGTH): string => Math.random().toString(RADIX_BASE).substring(MIN_ID_OFFSET, MIN_ID_OFFSET + idLength);

export default { generateRandomId };