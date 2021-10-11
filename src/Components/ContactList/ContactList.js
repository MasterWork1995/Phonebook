import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContacts,
} from '../../redux/contacts/contacts-operation';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);
  const contacts = useSelector(getVisibleContacts);

  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} classNames={'animate'} timeout={800}>
          <li className={s.item}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
              type="button"
              className={s.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactsList;
