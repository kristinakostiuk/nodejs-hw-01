// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'node:fs/promises';

// export const getAllContacts = async () => {
//     try {
//         const data = await fs.readFile(PATH_DB, 'utf-8');
//         const contacts = JSON.parse(data);
//         console.log(`Було знайдено ${contacts.length} контактів`);
//         return contacts;
//     } catch (error) {
//         console.log('Сталась помилка', error);
//     }
// };

// const main = async () => {
//     const allContacts = await getAllContacts();
//     console.log(allContacts);
// };

// main();
