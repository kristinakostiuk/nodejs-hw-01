import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import updateContact from './updateContact.js';

const generateContacts = async (number) => {
    const data = await getAllContacts();
    const newContact = Array(number).fill(0).map(createFakeContact);
    data.push(...newContact);
    updateContact(data);
};

generateContacts(5);
