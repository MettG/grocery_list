import React from 'react';

class GroceryItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "",quantity:"0"}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.add(this.state);
		this.setState({name:"", quantity:"0"});
	};

	handleChange(e) {
		if(e.target.id === "n")
			this.setState({name: e.target.value, quantity: this.state.quantity});
		else if(e.target.id === "q")
			this.setState({name: this.state.name, quantity: e.target.value});
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
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
					placeholder="Put a quantity"
					value={this.state.quantity}
					name="quantity"
					id="q"
					onChange={this.handleChange}
				/>
				<input type="submit" value="save"/>
			</form>
		);
	};
};

export default GroceryItemForm;