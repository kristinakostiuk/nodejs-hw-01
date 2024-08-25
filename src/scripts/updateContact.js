import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


const updateContact = async (contacts) => {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

export default updateContact;
