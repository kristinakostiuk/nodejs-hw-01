import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        for (let index = 0; index < number; index++) {
            const newContacts = createFakeContact();
            contacts.push(newContacts);
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        };
        console.log(`Було додано ${number} нових контактів`);
    } catch (error) {
        console.log('Сталась помилка:', error);
    }
};

generateContacts(5);
