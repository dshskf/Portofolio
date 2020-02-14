import React, { Component } from 'react'
import Panel from '../../Components/Panel/panel.components'
import SkillComponents from '../../Components/Skill/skill.components'

export class SkillPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Panel index={1}></Panel>
                <SkillComponents></SkillComponents>
            </React.Fragment>
        )
    }
}

export default SkillPage
