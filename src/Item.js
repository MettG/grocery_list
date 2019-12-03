import React from 'react';

const Todo = (props) => {
	return (
		<li>
			<div 
				onClick={() => {props.itemClick(props.id)} }
				style={props.carted? {...styles.item, ...styles.carted} : styles.item}
			>
				{ props.name }  {props.quantity}
			</div>
			<button onClick={() => {
				props.itemDelete(props.id)
			}}>Delete</button>
			{/* <button onClick={() => {
				showForm();
			}}>Edit</button>
			<div id="form" onSubmit={() => {props.handleSubmit}}>
				<input
					required 
					placeholder="Add an Item"
					value={this.state.name}
					name="name"
					id="n"
					onChange={this.handleChange}
				>
				</input>
				<input 
					required 
					placeholder="Choose quantity"
					value={this.state.quantity}
					name="name"
					id="n"
					onChange={this.handleChange}
				>
				</input>
			</div> */}
		</li>
	);
};
// function showForm() {
// 	return 
// };
const styles = {
	item: {cursor: "pointer", },
	carted: {color: "grey", textDecoration: "line-through"}
};

export default Todo;