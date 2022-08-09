import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	return (
		<div className='navbar'>
			<nav>
				<Link to='/' className='brand'>
					<h1>Shelf</h1>
				</Link>
				<Link to='/add'>Add a Book</Link>
			</nav>
		</div>
	)
}

export default Navbar
