import React, { Component } from 'react'
import { faHtml5, faCss3Alt, faJs, faNode, faReact, faPhp, faJava, faAndroid, faPython, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faDatabase, faEdit, faProjectDiagram, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { SubSkillContainer, Skill, LeftArrow, RightArrow, SkillTitle, IconLogo, SkillList, IllustratorLogo, PhotoshopLogo, AfterEffectLogo, PremiereLogo, MyProject, SubProject, ProjectText } from './styles'

import ProjectDetails from '../project-detail/detail'
import ProgressBar from '../../ProgressBar/bar'

export class SubSkill extends Component {

    state = {
        show: 0,
        lineShow: 0,
        rotate: 0,
        animation: 0,
        dataShow: 0,
        skillPage: 0,
        nextPage: 0,
        prevPage: 0,
        detailPage: 0
    }

    componentDidMount() {
        const formWidth = window.innerWidth;

        setTimeout(() => {
            this.setState({
                lineShow: 1
            })
        }, 0)
        setTimeout(() => {
            this.setState({
                show: 1
            })
        }, formWidth > 760 ? 1200 : 0)
        setTimeout(() => {
            this.setState({
                rotate: 1
            })
        }, formWidth > 760 ? 2700 : 0)
        setTimeout(() => {
            this.setState({
                dataShow: 1
            })
        }, formWidth > 760 ? 8000 : 0)
        setTimeout(() => {
            this.setState({
                animation: 1
            })
        }, formWidth > 760 ? 9000 : 0)

    }


    nextSkillPage = () => {
        setTimeout(() => {
            this.setState({
                nextPage: 1
            })
        }, 0)
        setTimeout(() => {
            this.setState({
                skillPage: this.state.skillPage < 4 ? this.state.skillPage + 1 : this.state.skillPage,
                nextPage: 0
            })
        }, 500)
    }

    prevSkillPage = () => {
        setTimeout(() => {
            this.setState({
                nextPage: 1
            })
        }, 0)
        setTimeout(() => {
            this.setState({
                skillPage: this.state.skillPage > 0 ? this.state.skillPage - 1 : this.state.skillPage,
                nextPage: 0
            })
        }, 500)
    }

    detailPageHandler=()=>{
        this.setState({
            detailPage:!this.state.detailPage
        })
    }

    linkHandler = () => {
        window.open('https://ustore-alpha.herokuapp.com/', "_blank")
    }

    render() {
        const title = [
            {
                logo: faGlobe,
                text: "Full Stack"
            },
            {
                logo: faAndroid,
                text: "Android"
            },
            {
                logo: faEdit,
                text: "UI/UX"
            },
            {
                logo: faProjectDiagram,
                text: "Project"
            },
            {
                logo: faAngleDoubleUp,
                text: "Improvement"
            }
        ]
        const data = [
            [
                {
                    logo: faHtml5,
                    percentage: 90
                },
                {
                    logo: faJs,
                    percentage: 70
                },
                {
                    logo: faCss3Alt,
                    percentage: 80
                },
                {
                    logo: faDatabase,
                    percentage: 70
                },
                {
                    logo: faNode,
                    percentage: 85
                },
                {
                    logo: faReact,
                    percentage: 65
                },
                {
                    logo: faPhp,
                    percentage: 60
                }
            ],
            [
                {
                    logo: faJava,
                    percentage: 50
                },
                {
                    logo: faDotCircle,
                    percentage: 40
                }
            ],
            [
                {
                    logo: <IllustratorLogo />,
                    percentage: 30
                },
                {
                    logo: <PremiereLogo />,
                    percentage: 65
                },
                {
                    logo: <PhotoshopLogo />,
                    percentage: 50
                },
                {
                    logo: <AfterEffectLogo />,
                    percentage: 20
                }
            ],
            [],
            [
                {
                    logo: faPython,
                    percentage: 60
                },
                {
                    logo: faRProject,
                    percentage: 30
                }
            ]
        ]


        return (
            <SubSkillContainer line={this.state.lineShow} rotate={this.state.rotate}>
                <Skill show={this.state.show} animate={this.state.animation}>
                    {
                        this.state.skillPage > 0 ? <LeftArrow onClick={this.prevSkillPage} show={this.state.dataShow}>{"<"}</LeftArrow> : null
                    }
                    {
                        this.state.skillPage < 4 ? <RightArrow onClick={this.nextSkillPage} show={this.state.dataShow}>{">"}</RightArrow> : null

                    }
                    <SkillTitle next={this.state.nextPage} show={this.state.dataShow} >
                        <IconLogo icon={title[this.state.skillPage].logo} head />
                        <h1>{title[this.state.skillPage].text}</h1>
                    </SkillTitle>
                    {
                        this.state.skillPage === 3 ?
                            this.state.detailPage ?
                                <ProjectDetails change={this.detailPageHandler}/>
                                :
                                <MyProject>
                                    <SubProject>
                                        <ProjectText mark><b>U-STORE</b></ProjectText>
                                        <ProjectText onClick={this.linkHandler} link>Link</ProjectText>
                                        <ProjectText>70%</ProjectText>
                                        <ProjectText onClick ={this.detailPageHandler} detail>Detail</ProjectText>
                                    </SubProject>
                                    <SubProject>
                                        <ProjectText mark><b>Youtube Clone</b></ProjectText>
                                        <ProjectText soon>Coming soon</ProjectText>
                                        <ProjectText>10%</ProjectText>
                                        <ProjectText detail>Detail</ProjectText>
                                    </SubProject>
                                </MyProject>
                            :
                            data[this.state.skillPage].map((item, index) => {
                                return (
                                    <SkillList key={index} next={this.state.nextPage} show={this.state.dataShow}>
                                        {
                                            this.state.skillPage === 2 ?
                                                item.logo
                                                :
                                                <IconLogo icon={item.logo} />
                                        }
                                        <ProgressBar percentage={item.percentage} isFill={1} />
                                    </SkillList>
                                )
                            })
                    }
                    {
                        this.state.skillPage === 4 ?
                            <MyProject mark>
                                <p>*Percentage for April 2020</p>
                            </MyProject>
                            :
                            null
                    }
                </Skill>
            </SubSkillContainer>
        )
    }
}

export default SubSkill
