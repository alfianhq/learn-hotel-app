import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

export default function RoomsContainer() {
	return (
		<div>
			<h1>Hello From Rooms Container</h1>
			<RoomsFilter />
			<RoomsList />
		</div>
	);
}
