import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
        event.preventDefault();

        const contact = {
            name: event.currentTarget.elements.name.value,
            number: event.currentTarget.elements.number.value,
        };

        const isExist = contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase());

        if (isExist) {
            return alert(`A contact ${contact.name} is already in contacts.`);
        }

        dispatch(addContact(contact));
            event.currentTarget.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.lable} htmlFor={id}>Name</label>
        <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces"
            id={id}
            required
        />
        <label className={css.lable} htmlFor={id}>Number</label>
        <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={id}
            required
        />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    )
}
