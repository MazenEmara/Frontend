import { useState } from 'react';
import './App.css';
import milka from './assets/milka.png';
import StripeContainer from './components/StripeContainer';
import logo from './assets/Asset-4.png'

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		
			<div className='App'>
				<h1><img src={logo} alt="" style={{ width: "220px", height: "200px" }} /></h1>
				{showItem ? (
					<StripeContainer />
				) : (
					<>
						<h3>$10.00</h3>
						<img src={milka} alt='Milka' />
						<button onClick={() => setShowItem(true)} style={{ color: '#ffffff' }}>Purchase milka</button>
					</>
				)}
			</div>
	);
}

export default App;