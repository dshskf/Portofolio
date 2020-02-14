import React, { Component } from 'react'
import Panel from '../../Components/Panel/panel.components'
import AboutMeComponents from '../../Components/About/about'

export class AboutMePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Panel index={3} />
                <AboutMeComponents />
            </React.Fragment>
        )
    }
}

export default AboutMePage
