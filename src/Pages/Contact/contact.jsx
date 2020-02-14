import React, { Component } from 'react'
import Panel from '../../Components/Panel/panel.components'
import ContactComponents from '../../Components/Contact/contact.components'

export class ContactPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Panel index={2} />
                <ContactComponents />
            </React.Fragment>
        )
    }
}

export default ContactPage
