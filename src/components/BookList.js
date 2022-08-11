import { Link } from 'react-router-dom'
import './BookList.css'

function BookList({ books }) {
	if (books.length === 0) {
		return <div className='error'>No books to load...</div>
	}

	return (
		<div className='book-list'>
			{books.map((book) => (
				<div key={book.id} className='card'>
					<h3>{book.title}</h3>
					<p>{book.author}</p>
					<p>{book.date}</p>
					<div>{book.description.substring(0, 100)}...</div>
					<Link to={`/books/${book.id}`}>Open Book</Link>
				</div>
			))}
		</div>
	)
}

export default BookList
