import { readContacts } from '../utils/readContacts.js';

/**
 * @returns {Promise<number>}
 */
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error in contact count:', error);
    return 0;
  }
};

console.log(await countContacts());
