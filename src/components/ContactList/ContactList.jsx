import PropTypes from 'prop-types';
import {ItemContact} from 'components/ItemContact/ItemContact';
import css from './ContactList.module.css';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactList.map(({ id, name, number }) => (
        <ItemContact
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};