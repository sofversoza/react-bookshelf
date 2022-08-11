import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'

function Navbar() {
	return (
		<div className='navbar'>
			<nav>
				<Link to='/' className='brand'>
					<h1>Shelf</h1>
				</Link>
				<Searchbar />
				<Link to='/add'>Add a Book</Link>
			</nav>
		</div>
	)
}

export default Navbar
