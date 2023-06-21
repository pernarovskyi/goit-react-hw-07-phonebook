const getContacts = store => store.contacts;

const getFilteredContacts = ({contacts, filter}) => {
    if(!filter) return contacts;

    return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
}

export { getContacts, getFilteredContacts};