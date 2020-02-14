import React, { Component } from 'react'
import { Profile, Information, Attributes, SubAttributes, Progress, ProfileContainer } from './styles'

import ProgressBar from '../../ProgressBar/bar'

export class Profiles extends Component {

    state = {
        fillParam: 0,
        show: 0
    }

    componentDidMount() {
        const formWidth = window.innerWidth;

        setTimeout(() => {
            this.setState({
                show: 1
            })
        }, formWidth > 760 ? 3000 : 0)
        setTimeout(() => {
            this.setState({
                fillParam: 1
            })
        }, formWidth > 760 ? 6000 : 0)

    }

    render() {
        const data = [
            {
                attr: "Responsibility",
                percentage: 80
            },
            {
                attr: "Discipline",
                percentage: 85
            },
            {
                attr: "Creativity",
                percentage: 70
            },
            {
                attr: "Communication",
                percentage: 50
            },
            {
                attr: "Confidence",
                percentage: 60
            }
        ]

        return (
            <Profile >
                <ProfileContainer show={this.state.show}>
                    <Information>
                        <h1><b>ALEXANDER</b> KEVIN</h1>
                        <h2>SOFTWARE DEVELOPER</h2>
                        <p>Born in <b>Surabaya</b>, 18 March 1999, im 21 years old software developer with some experience in developing web and android app, im the first son of two, now im living in cikarang as the 8 semester student in President University.</p>
                    </Information>

                    <Attributes>
                        {
                            data.map(item => {
                                return (
                                    <SubAttributes>
                                        <p>{item.attr}</p>
                                        <ProgressBar percentage={item.percentage} isFill={this.state.fillParam}></ProgressBar>
                                    </SubAttributes>
                                )
                            })
                        }
                    </Attributes>
                </ProfileContainer>
            </Profile>

        )
    }
}

export default Profiles
