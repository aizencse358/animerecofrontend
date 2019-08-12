import React from 'react'
import Card from './Card';

const Foodrecognition = ({imageurl,foods}) => {
	return(
	<div className='mw5 mw7-ns center pa3 ph5-ns'>
		
			<div className='mt7 pt5 pa4 '>
			{
				foods.map((user) => {
					return ( 
						<Card 
						name={user} 
						/>
						);
				})
			}
			</div>
  
		</div>

		
    

		);



}

export default Foodrecognition;