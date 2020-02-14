import React, { Component } from 'react'
import SubSkill from './Sub-Skill/sub'
import { TopLeft, TopRight, BottomLeft, BottomRight, CenterLine, SkillDetail } from './styles'

export class SkillComponents extends Component {

    state = {
        lineShow: 0,
        show: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                lineShow: 1
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                show: 1
            })
        }, 4200)

    }

    render() {
        return (
            <SkillDetail>
                <TopLeft show={this.state.show} />
                <TopRight show={this.state.show} />
                <BottomLeft show={this.state.show} />
                <BottomRight show={this.state.show} />
                <CenterLine show={this.state.lineShow} />
                <SubSkill></SubSkill>
            </SkillDetail>
        )
    }
}

export default SkillComponents
