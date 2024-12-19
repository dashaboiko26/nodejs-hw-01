import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

/**
 * @param {Array} updatedContacts
 */
export const writeContacts = async (updatedContacts) => {
  try {
    const formattedData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, formattedData);
    console.log('Contacts saved successfully in formatted form!');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};
