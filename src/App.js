import React from 'react';
import List from './List';
import GroceryItemForm from './GroceryItemForm';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items:[
				{id: 1, name:"Cabbage", quantity: "3", carted:true},
				{id: 2, name:"Chicken Breast", quantity: "5 lbs.", carted:false},
				{id: 3, name:"Potatoes", quantity: "3 lbs.", carted:false},
			]
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
	};

	getUniqId = () => {
		//NOTE We are just using this as a helper function for id's since we aren't using a db yet
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	addItem(item) {
		const val = {id: this.getUniqId(), name: item.name, quantity: item.quantity, carted:false};
		this.setState({items: [...this.state.items,val]})
	};

	handleClick(id) {
		this.setState({
			items: this.state.items.map(i => {
				if(i.id === id)
					return {
						id, name: i.name, quanity: i.quantity, carted: !i.carted
					};
				return i;
			}
		)});
	}

	deleteItem(item) {
		var arr = this.state.items.slice(0);
		arr.forEach((value,index) => {
			if(value.id === item) arr.splice(index,1);
		});
		this.setState({
			items: arr
		});
	};
	// Find id and replace item
	editItem(item) {
		this.setState({
			items: this.state.items.map( i => {
				if(i.id === item.id) return item;
				return i;
			})
		});
	};

	render() {
		return (
			<div>
				<GroceryItemForm add={this.addItem} />
				<List 
					name= "Grocery List" 
					items={this.state.items} 
					click={this.handleClick} 
					edit={this.editItem} 
					delete={this.deleteItem}
				/>
			</div>
		);
	};
}

export default App;
