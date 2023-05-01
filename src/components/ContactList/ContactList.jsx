import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';
import { ContactListWrapper,ContactItem, ContactButton } from './ContactList.styled';

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ContactListWrapper >{
            contacts.map(contact => {
                return (<ContactItem key={contact.id}>
                <Contact 
                id={contact.id}
                name={contact.name}
                number={contact.number} />
                <ContactButton type="button" onClick={() => onDeleteContact(contact.id)}>Delete</ContactButton>
                </ContactItem >)
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