import React, { Component } from 'react'
import { DetailContainer, DetailsBox, SubDetails, HeaderText, ListParent, List, ListHeader, Paragraph, DetailsTitle, LinkButton, CloseLogo } from './styles'

export class ProjectDetails extends Component {

    state = {
        show: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: 1
            })
        }, 0)
    }

    linkHandler = () => {
        window.open('https://ustore-alpha.herokuapp.com/', "_blank")
    }

    render() {
        const { change } = this.props
        return (
            <DetailContainer show={this.state.show}>
                <CloseLogo onClick={change}>X</CloseLogo>
                <DetailsTitle>
                    <HeaderText title>U-STORE</HeaderText>
                    <Paragraph><b>Progress: </b></Paragraph>
                    <Paragraph percentage>70%</Paragraph>
                </DetailsTitle>
                <HeaderText>Features</HeaderText>
                <DetailsBox>
                    <SubDetails>
                        <ListHeader>Account</ListHeader>
                        <ListParent>
                            <List>Login</List>
                            <List>Sign-up</List>
                            <List>Reset password</List>
                        </ListParent>
                    </SubDetails>

                    <SubDetails>
                        <ListHeader>Product</ListHeader>
                        <ListParent>
                            <List>Add product</List>
                            <List>Edit product</List>
                        </ListParent>
                    </SubDetails>

                    <SubDetails>
                        <ListHeader>User</ListHeader>
                        <ListParent>
                            <List>Sell product</List>
                            <List>Buy product</List>
                        </ListParent>
                    </SubDetails>
                </DetailsBox>

                <HeaderText >Details</HeaderText>
                <DetailsBox end>
                    <SubDetails detail>
                        <ListHeader>React</ListHeader>
                        <ListParent>
                            <List>React-Redux</List>
                            <List>Redux-Saga</List>
                            <List>Redux-Persist</List>
                            <List>Styled-Components</List>
                        </ListParent>
                    </SubDetails>
                    <SubDetails detail>
                        <ListHeader>NodeJs</ListHeader>
                        <ListParent>
                            <List>Express</List>
                            <List>Mongoose</List>
                        </ListParent>
                    </SubDetails>
                </DetailsBox>
                <LinkButton onClick={this.linkHandler}>Go to website</LinkButton>
            </DetailContainer>
        )
    }
}

export default ProjectDetails
