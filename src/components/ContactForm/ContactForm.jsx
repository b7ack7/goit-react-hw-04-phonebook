import React, {Component} from "react";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { FormWrapper, Label, Input, Button, Message } from "./ContactForm.styled";

const initialValues = {
    name:'',
    number: ''
}

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const schema = yup.object().shape({
    name: yup.string().matches(nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),
    number: yup.string().matches(phoneRegExp, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required(),
  });


export class ContactForm extends Component  {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    handleSubmitContactForm = (values, {resetForm}) => {
        this.props.onSubmit({ ...values });
        resetForm();
      };
    
    render() {
        return (
            <Formik initialValues={initialValues}
             onSubmit={this.handleSubmitContactForm}
             validationSchema={schema}>
                <FormWrapper>
                <Label htmlFor="name">Name</Label>
                <Input
                id="name"
                type="text"
                name="name"
              />
              <ErrorMessage name="name" component={Message}/>
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                type="tel"
                name="number"
              />          
              <ErrorMessage name="number" component={Message}/>
              <Button  type="submit">Add contact</Button>
                </FormWrapper>
            </Formik>
          )
    }

}