import React, { Component } from 'react';
import { PanelContainer, PanelIcon, Pargaraph, PanelSizer } from './styles';
import { withRouter } from 'react-router-dom';

import {
	faHome,
	faBrain,
	faMobileAlt,
	faAddressCard
} from '@fortawesome/free-solid-svg-icons';


export class Panel extends Component {

	constructor(props) {
		super(props)

		this.state = {
			finishMount: null,
			disableDelay: null
		};

		this.elementRef = React.createRef()
	}


	componentDidMount() {
		const formWidth = window.innerWidth;

		setTimeout(() => {
			this.setState({ finishMount: 'start' });
		}, formWidth > 760 ? 200 : 0);
		setTimeout(() => {
			this.setState({ disableDelay: 'disable' });
		}, formWidth > 760 ? 1500 : 0);
	}

	clickedPage = e => {
		this.props.history.push(`/${e.currentTarget.id}`)
	}

	render() {
		const { index } = this.props
		const data = [
			{
				icon: faHome,
				text: "Home"
			},
			{
				icon: faBrain,
				text: "Skill"
			},
			{
				icon: faMobileAlt,
				text: "Contact"
			},
			{
				icon: faAddressCard,
				text: "About"
			}
		]
		return (
			<PanelContainer>
				<PanelSizer show={this.state.finishMount} delay={this.state.disableDelay}>
					{
						data.map((item, ind) => {
							return (
								<React.Fragment key={ind}>
									<PanelIcon
										id={item.text === "Home" ? "" : item.text.toLowerCase()}
										icon={item.icon}
										show={this.state.finishMount}
										delay={this.state.disableDelay}
										highlight={index === ind ? 1 : 0}
										onClick={this.clickedPage}
									/>
									<Pargaraph
										show={this.state.finishMount}
										delay={this.state.disableDelay}
										highlight={index === ind ? 1 : 0}>
										{item.text}
									</Pargaraph>
								</React.Fragment>
							)
						})
					}
				</PanelSizer>
			</PanelContainer>
		);
	}
}

export default withRouter(Panel);
