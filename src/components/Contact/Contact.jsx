import PropTypes from 'prop-types';
import { ContactItem, ContactButton } from './Contact.styled';

export const Contact = ({id, name, number}) => {
    return (
        <ContactItem>
            {name}: {number}
            <ContactButton type="button" data-id={id}>Delete</ContactButton>
        </ContactItem>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}