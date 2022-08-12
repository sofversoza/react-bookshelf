import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

function Searchbar() {
	const [term, setTerm] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		// redirects user to search page with a dynamic query parameter (?q=)
		navigate(`/search?q=${term}`)
	}

	return (
		<div className='searchbar'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='search'>Search:</label>
				<input
					type='text'
					id='search'
					onChange={(e) => setTerm(e.target.value)}
					required
				/>
			</form>
		</div>
	)
}

export default Searchbar
