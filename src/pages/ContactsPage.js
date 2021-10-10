import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import Section from '../Components/Section';

export const ContactsPage = () => {
  return (
    <>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      <Section title="My contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
