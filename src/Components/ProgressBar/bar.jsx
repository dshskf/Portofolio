import React, { Component } from 'react'
import { Progress } from './styles'

export class ProgressBar extends Component {
    render() {
        const { percentage, isFill } = this.props
        return (
            <Progress param={percentage} fill={isFill} />
        )
    }
}

export default ProgressBar
