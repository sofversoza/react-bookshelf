import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './Navbar.css'
import Searchbar from './Searchbar'

function Navbar() {
	const { color } = useTheme()

	return (
		<div className='navbar' style={{ background: color }}>
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
