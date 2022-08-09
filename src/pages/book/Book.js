import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Book.css'
import img from '../../assets/imgs/levy.jpeg'

function Book() {
	const { id } = useParams()
	const url = 'http://localhost:3000/books/' + id
	const { error, isPending, data: book } = useFetch(url)

	return (
		<div className='book'>
			{error && <p className='error'>{error}</p>}
			{isPending && <p className='loading'>Loading...</p>}
			{book && (
				<>
					<h2>{book.title}</h2>
					<h5>{book.subtitle}</h5>
					<h3>{book.author}</h3>
					<img src={img} alt='bookcover'/>
					<p>{book.description}</p>
					<br />
					<p>{book.description2}</p>
					<br />
					<h4>PAGES: {book.pages}</h4>
					<h4>RELEASE DATE: {book.date}</h4>
					<h4>
						GENRE:&nbsp;
						{book.genre.map((g) => (
							<span key={g}>{g}</span>
						))}
					</h4>
				</>
			)}
		</div>
	)
}

export default Book
