import React, { Component } from 'react';
import ContactData from './contact-data/data'
import ContactForm from './contact-form/form'

import {
    ContactContainer
} from './styles';

export class ContactComponents extends Component {
    render() {
        return (
            <ContactContainer>
                <ContactData></ContactData>
                <ContactForm></ContactForm>
            </ContactContainer>
        );
    }
}

export default ContactComponents;
