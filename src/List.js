import React from 'react';
import Item from './Item';

const List = (props) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<ul>
				{ props.items.map( 
					item => 
					<Item 
						key={item.id} {...item} itemClick={props.click} 
						itemDelete={props.delete} itemEdit={props.edit}
					/>
					)}
			</ul>
		</div>
	);
};

export default List;