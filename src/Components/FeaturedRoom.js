import React, {Component} from 'react';
import {RoomContext} from '../Context';

export default class FeaturedRoom extends Component {
	static contextType = RoomContext;
	render() {
		const {featuredRooms: rooms} = this.context;
		console.log(rooms);

		return <div>From Featured Rooms </div>;
	}
}
