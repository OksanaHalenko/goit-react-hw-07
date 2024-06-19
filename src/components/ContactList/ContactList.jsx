import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const visibleContact = useSelector(selectContacts);
  return (
    <div className={css.wrapper}>
      {visibleContact.map((contact) => (
        <Contact data={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
