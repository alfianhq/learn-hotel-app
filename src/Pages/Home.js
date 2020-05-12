import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRoom';

export default function Home() {
	return (
		<>
			<Hero>
				<Banner title='luxurios rooms' subtitle='deluxe rooms starting at $299'>
					<Link to='/rooms' className='btn-primary'>
						Our Romms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms></FeaturedRooms>
		</>
	);
}
