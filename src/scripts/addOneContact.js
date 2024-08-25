import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import updateContact from './updateContact.js';

export const addOneContact = async () => {
    const data = await getAllContacts();
    const newContact = createFakeContact();
    data.push(newContact);
    await updateContact(data);
};

addOneContact();
