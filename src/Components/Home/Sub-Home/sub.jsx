import React, { Component } from 'react'
import { SubContainer, IconLogo, ListParent, List } from './styles'


export class SubHome extends Component {
    render() {
        const { icon, title, list, show } = this.props
        return (
            <SubContainer isShow={show ? 1 : 0}>
                <IconLogo icon={icon}></IconLogo>
                <h1>{title}</h1>
                <ListParent>
                    {
                        list.map((item, index) => {
                            return (
                                <List key={index}>{item}</List>
                            )
                        })
                    }
                </ListParent>
            </SubContainer>

        )
    }
}

export default SubHome
