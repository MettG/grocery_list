import React from 'react';

class Item extends React.Component {
	
	editClicked = this.editClicked.bind(this);
	state = {id: this.props.id, name: this.props.name, quantity: this.props.quantity, clicked:false};

	editClicked() {
		this.setState({id: this.state.id, name: this.state.name, quantity: this.state.quantity,clicked: !this.state.clicked});
	}
	handleChange = (e) => {
		if(e.target.id === "n")
			this.setState({name: e.target.value, quantity: this.state.quantity, clicked: this.state.clicked});
		else if(e.target.id === "q")
			this.setState({name: this.state.name, quantity: e.target.value, clicked: this.state.clicked});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.itemEdit(this.state);
		this.setState({name: this.state.name, quantity: this.state.quantity, clicked: false});
	};

	render(){
		return (
			<li>
				<div 
					onClick={() => {this.props.itemClick(this.props.id)} }
					style={this.props.carted? {...styles.item, ...styles.carted} : styles.item}
				>
					{ this.props.name }  {this.props.quantity}
				</div>
				<button onClick={() => {
					this.props.itemDelete(this.props.id)
				}}>Delete</button>
				<button onClick={() => {
					this.editClicked();
				}}>Edit</button>
				<form
					onSubmit={this.handleSubmit}
					style={this.state.clicked? {display:"block"} : {display:"none"}}
				>
					<input
						required 
						placeholder="Add an Item"
						value={this.state.name}
						name="name"
						id="n"
						onChange={this.handleChange}
						/>
					<input 
						required 
						placeholder="Choose quantity"
						value={this.state.quantity}
						name="quantity"
						id="q"
						onChange={this.handleChange}
					/>
					<button type="submit">Save</button>
				</form>
			</li>
		);
	}
};

const styles = {
	item: {cursor: "pointer", },
	carted: {color: "grey", textDecoration: "line-through"}
};

export default Item;