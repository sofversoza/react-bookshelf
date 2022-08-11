import { useHistory } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Add.css'

function Add() {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [description, setDescription] = useState('')
	const [newGenre, setNewGenre] = useState('')
	const [genres, setGenres] = useState([])

	const genreInput = useRef(null)
	const history = useHistory()

	const { postData, data, error } = useFetch(
		'http://localhost:3000/books',
		'POST'
	)

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(title, author, description, genres)
		postData({
			title,
			author,
			description,
			genres,
		})
	}

	const handleAdd = (e) => {
		e.preventDefault()
		const gnr = newGenre.trim()
		// checking if the value is not an empty string & doesnt exist already
		if (gnr && !genres.includes(gnr)) {
			setGenres((prevGenres) => [...prevGenres, gnr])
		}
		// clear the input after clicking add genre so that we can add more
		setNewGenre('')
		// focus on the input box after hitting the add button so no need to click on it again to type another genre
		// used with useRef()
		genreInput.current.focus()
	}

	// redirect user when we get a data response
	useEffect(() => {
		if (data) {
			history.push('/')
		}
	}, [data])

	return (
		<div className='add'>
			<h2 className=''>Add a New Book</h2>

			<form onSubmit={handleSubmit}>
				<label>
					<span>Book title:</span>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						required
					/>
				</label>

				<label>
					<span>Author:</span>
					<input
						type='text'
						onChange={(e) => setAuthor(e.target.value)}
						value={author}
						required
					/>
				</label>

				<label>
					<span>Genres:</span>
					<div className='genres'>
						<input
							type='text'
							onChange={(e) => setNewGenre(e.target.value)}
							value={newGenre}
							ref={genreInput}
						/>
						<button onClick={handleAdd} className='btn'>
							add
						</button>
					</div>
				</label>
				{/* show the added genres under the input box */}
				<p>
					Current Genres:{' '}
					{genres.map((g) => (
						<em key={g}>{g}, </em>
					))}
				</p>

				<label>
					<span>Decription:</span>
					<textarea
						onChange={(e) => setDescription(e.target.value)}
						value={description}
						required
					/>
				</label>

				<button className='btn'>add book</button>
			</form>
		</div>
	)
}

export default Add
