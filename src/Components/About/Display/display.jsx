import React, { Component } from 'react'
import { Detail, AboutBox, SubBox, Title } from './styles'

export class Display extends Component {

    state = {
        show: 0,
        showTitle:0,
        stop:0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: 1
            })            
        }, 0)
        setTimeout(() => {
            this.setState({
                showTitle: 1
            })            
        }, 4700)
        setTimeout(() => {
            this.setState({
                stop: 1
            })            
        }, 5700)
    }

    render() {
        return (
            <Detail>
                <AboutBox>
                    <SubBox show={this.state.show} animation={this.state.stop}>
                        <Title show={this.state.showTitle}>ABOUT ME</Title>
                    </SubBox>
                </AboutBox>
            </Detail>
        )
    }
}

export default Display
