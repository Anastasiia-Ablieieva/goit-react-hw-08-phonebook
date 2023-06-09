import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import css from './ContactList.module.css';

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const isLoading = useSelector(selectIsLoading);

    const onDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    return (
        <>
            <ul className={css.contactList}>
                {isLoading ? (<p>Loading...</p>) : filteredContacts.map(contact => {
                    return(
                        <li className={css.contactItem} 
                        key={contact.id}> 
                            <span>{contact.name}: {contact.number}</span>
                            <Button variant="outlined" type="button" onClick={() => onDeleteContact(contact.id)}>Delete</Button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

