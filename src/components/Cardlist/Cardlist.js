import React from 'react';
import Card from './Card';

const Cardlist = ({animes,flag}) =>{
	if(flag){
	return (
	<div>
	<p className='f3 white'> {'Invalid input.Here is our recommedations:'} </p>
	{
	animes.map((user,i) => {
		return ( 
			<Card 
			key = {i}
			name={user} 
			/>
			);
	})
}
    </div>
	);
}
else
{
	return (
	<div>
	{
	animes.map((user,i) => {
		return ( 
			<Card 
			key = {i}
			name={user} 
			/>
			);
	})
}
    </div>
	);
}
}

export default Cardlist;