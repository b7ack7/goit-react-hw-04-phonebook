import PropTypes from 'prop-types';
import { ContactInfo } from './Contact.styled';

export const Contact = ({id, name, number}) => {
    return (
        <ContactInfo>
            {name}: {number}
        </ContactInfo>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}