import React, { Component } from 'react'
import SubSkill from './Sub-Skill/sub'
import { TopLeft, TopRight, BottomLeft, BottomRight, CenterLine, SkillDetail } from './styles'

export class SkillComponents extends Component {

    state = {
        lineShow: 0,
        show: 0,
        stop: 0
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
        setTimeout(() => {
            this.setState({
                stop: 1
            })
        }, 9000)
    }

    render() {
        return (
            <SkillDetail>
                <TopLeft show={this.state.show} delay={this.state.stop} />
                <TopRight show={this.state.show} delay={this.state.stop} />
                <BottomLeft show={this.state.show} delay={this.state.stop} />
                <BottomRight show={this.state.show} delay={this.state.stop} />
                <CenterLine show={this.state.lineShow} delay={this.state.stop} />
                <SubSkill></SubSkill>
            </SkillDetail>
        )
    }
}

export default SkillComponents
