import './App.css';
import imageTwo from './image/shopping.webp';
import image from './image/man.webp';
import { GroceryList } from './GroceeryList';

function App() {
	return (
		<div className='app'>
			<img src={imageTwo} width='150px' alt='shopping' />
			<div className='container'>
				<h1>Grocery list</h1>
			</div>
			<GroceryList />
			<div className='container'>
				<img src={image} width='150px' alt='man' />
			</div>
		</div>
	);
}

export default App;
