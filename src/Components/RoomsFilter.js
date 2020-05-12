import React, {Component} from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../Components/Title';

export default function RoomsFilter() {
	const context = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	return (
		<section className='filter-container'>
			<Title title='search rooms' />
			<form className='filter-form'>
				{/* select type */}
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select
						name='type'
						id='type'
						value={type}
						className='form-control'
						onChange={handleChange}>
						<option value='single'>Single</option>
					</select>
				</div>

				{/* end selet type */}
			</form>
		</section>
	);
}
