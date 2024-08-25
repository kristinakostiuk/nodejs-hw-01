import { getAllContacts } from "./getAllContacts.js";
import updateContact from "./updateContact.js";

export const removeLastContact = async () => {
    const data = await getAllContacts();
    data.pop();
    await updateContact(data);
};

removeLastContact();
