import { readContacts } from './utils/readContacts.js';
import { writeContacts } from './utils/writeContacts.js';

const init = async () => {
  try {
    const contacts = await readContacts();
    console.log('contact list:', contacts);

    await writeContacts(contacts);
  } catch (error) {
    console.error('Error working with contacts:', error);
  }
};

init();
