import PropTypes from 'prop-types';
import css from './ItemContact.module.css';

export const ItemContact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item} key={id}>
       <p className={css.text}>
        {name}: {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};