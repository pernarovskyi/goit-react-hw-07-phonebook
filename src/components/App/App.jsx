import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { Container, MainTitle, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
