import { Component } from 'react';
import basket from './image/basket.jpg';

export class GroceryList extends Component {
	state = {
		userInput: '',
		groceryList: [],
	};

	onChangeEvent(e) {
		this.setState({ userInput: e });
	}

	addItem(input) {
		if (input === '') {
			alert('Please enter an item');
		} else {
			let listArray = this.state.groceryList;
			listArray.push(input);
			this.setState({ groceryList: listArray, userInput: '' });
		}
	}

	deleteItem() {
		let listArray = this.state.groceryList;
		listArray = [];
		this.setState({ groceryList: listArray });
	}

	crossedWord(event) {
		const li = event.currentTarget;
		li.classList.toggle('crossed');
	}

    onFormSubmit(e){
        e.preventDefault();

    }

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div className='container'>
						<input
							type='text'
							placeholder='What do you want to buy?'
							onChange={(e) => {
								this.onChangeEvent(e.target.value);
							}}
							value={this.state.userInput}
						/>
					</div>
					<div className='container'>
						<button className='btn add' onClick={() => this.addItem(this.state.userInput)}>
							Add
						</button>
					</div>
					<ul>
						{this.state.groceryList.map((item, index) => (
							<li onClick={this.crossedWord} key={index}>
								<img src={basket} width='50px' alt='basket' />
								{item}
							</li>
						))}
					</ul>
					<div className='container'>
						<button className='btn delete' onClick={() => this.deleteItem()}>
							Delete
						</button>
					</div>
				</form>
			</div>
		);
	}
}
