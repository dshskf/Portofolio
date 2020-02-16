import React, { Component } from 'react';
import { faLine, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import {
	MaskDisplay,
	OuterCircle,
	MovingCircle,
	Header,
	HoverDisplay,
	SubDisplay,
	MediaLogo,
	ExpandLogo,
	DetailDisplay
} from './styles';

export class ContactData extends Component {
	state = {
		show: 0,
		circle: 0,
		outerCircle: 0,
		movingCircle: 0,
		shadow: 0
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				circle: 1
			});
		}, 0);
		setTimeout(() => {
			this.setState({
				outerCircle: 1
			});
		}, 1500);
		setTimeout(() => {
			this.setState({
				movingCircle: 1
			});
		}, 3200);
		setTimeout(() => {
			this.setState({
				show: 1
			});
		}, 4500);
	};

	showData = () => {
		this.setState({
			show: this.state.show === 0 ? 1 : 0
		});
	};

	render() {
		const data = [
			{
				logo: faEnvelope,
				data: 'alexkeman9@gmail.com'
			},
			{
				logo: faLine,
				data: 'a7kevin'
			},
			{
				logo: faWhatsapp,
				data: '082111404545'
			},
			{
				logo: faLinkedin,
				data: 'linkedin.com/in/xandervin'
			}
		];

		return (
			<React.Fragment>
				<MaskDisplay onClick={this.showData} isShow={this.state.show} moving={this.state.movingCircle}>
					<OuterCircle moving={this.state.outerCircle} />
					<MovingCircle moving={this.state.movingCircle} />
					<Header moving={this.state.circle}>Contact Me</Header>
					<ExpandLogo
						icon={faChevronCircleDown}
						onClick={this.showData}
						isShow={this.state.show}
						moving={this.state.movingCircle}
					/>
				</MaskDisplay>

				<DetailDisplay moving={this.state.movingCircle}>
					<HoverDisplay>
						{data.map((item, index) => {
							return (
								<SubDisplay key={index}>
									<MediaLogo icon={item.logo} />
									<p>{item.data}</p>
								</SubDisplay>
							);
						})}
					</HoverDisplay>
				</DetailDisplay>
			</React.Fragment>
		);
	}
}

export default ContactData;
