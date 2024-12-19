import { readContacts } from '../utils/readContacts.js';

/**
 * @returns {Promise<Array>}
 */
export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
