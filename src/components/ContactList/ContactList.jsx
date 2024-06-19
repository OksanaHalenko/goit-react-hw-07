import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.wrapper}>
      {visibleContact.map((contact) => (
        <Contact data={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
