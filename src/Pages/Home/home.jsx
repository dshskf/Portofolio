import React, { Component } from 'react'
import Panel from '../../Components/Panel/panel.components'
import HomeComponent from '../../Components/Home/home.components'

export class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Panel index={1} />
                <HomeComponent />
            </React.Fragment>
        )
    }
}

export default HomePage
