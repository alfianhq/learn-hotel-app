import React, {Component} from 'react';
import {RoomContext} from '../Context';

export default class FeaturedRoom extends Component {
	static contextType = RoomContext;
	render() {
		const {name, greeting} = this.context;

		return (
			<div>
				{greeting}
				{name} From Featured Rooms{' '}
			</div>
		);
	}
}
