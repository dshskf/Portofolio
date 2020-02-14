import React, { Component } from 'react'
import { AboutMeContainer, HighlightLine } from './styles'

import Display from './Display/display'
import Profiles from './Profile/profile'

export class AboutMeComponents extends Component {

    state = {
        fillLine: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                fillLine: 1
            })
        },1500)
    }

    render() {
        return (
            <AboutMeContainer>
                <HighlightLine fill={this.state.fillLine} />
                <HighlightLine fill={this.state.fillLine} />
                <Display />
                <Profiles />
            </AboutMeContainer>
        )
    }
}

export default AboutMeComponents
