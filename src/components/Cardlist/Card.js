import React from 'react';

const Card = (props) => {
	const{name}=props
	return (
       <div className='tc bg-light-green dib br4 pa5 mt5 mh4  grow bw5 shadow-5'>
       <div>
       <h2>{name}</h2>
       </div>
       </div>



	);
}

export default Card;