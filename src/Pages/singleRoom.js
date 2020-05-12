import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
		};
	}
	static contextType = RoomContext;
	// componentDidMount() {}

	render() {
		const {getRoom} = this.context;
		const room = getRoom(this.state.slug);
		console.log(room);

		return (
			<div>
				<h1>Hello from single room page bro</h1>
			</div>
		);
	}
}
