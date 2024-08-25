import updateContact from "./updateContact.js";

export const removeAllContacts = async () => {
    updateContact([]);
};

removeAllContacts();
