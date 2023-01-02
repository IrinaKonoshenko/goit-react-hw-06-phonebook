import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormCreate } from './FormCreate/FormCreate';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <div className="App">
      <Section title="Phonebook">
        <FormCreate />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
