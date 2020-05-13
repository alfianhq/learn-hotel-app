import React, {Component} from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../Components/Title';

// get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({rooms}) {
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

	// get unique types
	let types = getUnique(rooms, 'type');

	// add all
	types = ['all', ...types];

	// map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	// GUest function
	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});
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
						{types}
					</select>
				</div>
				{/* end selet type */}

				{/*guests  */}
				<div className='form-group'>
					<label htmlFor='capacity'>Guests</label>
					<select
						name='capacity'
						id='capacity'
						value={capacity}
						className='form-control'
						onChange={handleChange}>
						{people}
					</select>
				</div>
				{/* end guests  */}

				{/* Room Price  */}

				<div className='form-group'>
					<label htmlFor='price'>room price ${price}</label>
					{/* name haru sama */}
					<input
						type='range'
						name='price'
						min={minPrice}
						max={maxPrice}
						id='price'
						value={price}
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				{/* End Room Price  */}

				{/* Size */}
				<div className='form-group'>
					<label htmlFor='size'>room size</label>
					<div className='size-inputs'>
						{/* min size */}
						<input
							type='number'
							name='minSize'
							id='size'
							value={minSize}
							onChange={handleChange}
							className='size-input'
						/>

						{/* max size */}
						<input
							type='number'
							name='maxSize'
							id='size'
							value={maxSize}
							onChange={handleChange}
							className='size-input'
						/>
					</div>
				</div>
				{/* End Of Size */}
			</form>
		</section>
	);
}
