import css from "./App.module.css";

import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <hr />
      <SearchBox />
      <hr />
      <ContactList />
    </div>
  );
}

export default App;
