import React, { Component } from 'react'

import {
    FormContainer,
    SubInput,
    InputField,
    SubmitButton,
    TextArea,
    ErrText
} from './styles';

export class ContactForm extends Component {

    state = {
        name: null,
        email: null,
        company: null,
        message: null,
        feedback: null,
        msg: null
    }

    inputHandler = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    submitForm = async () => {
        fetch('https://portofolio-api.herokuapp.com/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    msg: data.msg
                })
                if (data.msg === "Thank You!") {
                    this.setState({
                        name: null,
                        email: null,
                        company: null,
                        message: null,
                        feedback: null
                    })
                }

                return data
            })
    }

    render() {
        const data = [
            {
                text: "Name",
                type: "text"
            },
            {
                text: "Company",
                type: "text"
            },
            {
                text: "Email",
                type: "email"
            }
        ]

        return (
            <FormContainer>
                {
                    data.map((item, index) => {
                        return (
                            <SubInput key={index}>
                                <label>{item.text}</label>
                                <InputField name={item.text.toLowerCase()} type={item.type} spellCheck="false" autoCorrect="false" autoComplete="off" onChange={this.inputHandler} />
                            </SubInput>
                        )
                    })
                }
                <SubInput>
                    <label>Message</label>
                    <TextArea name="message" spellCheck="false" autoCorrect="false" onChange={this.inputHandler}></TextArea>
                </SubInput>
                <SubInput>
                    <label>Feedback</label>
                    <TextArea name="feedback" spellCheck="false" autoCorrect="false" onChange={this.inputHandler}></TextArea>
                </SubInput>
                <SubInput>
                    {
                        this.state.msg ?
                            <ErrText>{this.state.msg}</ErrText>
                            :
                            null
                    }
                    <SubmitButton type='submit' value='SEND' onClick={this.submitForm} />
                </SubInput>
            </FormContainer>
        )
    }
}

export default ContactForm
