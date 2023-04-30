import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';
import { ContactListWrapper } from './ContactList.styled';

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ContactListWrapper onClick={onDeleteContact}>{
            contacts.map(contact => {
                return <Contact key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number} />
            })
        }
        </ContactListWrapper>
  
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
    })),
   
    onDeleteContact: PropTypes.func.isRequired
}