import { useLocation } from 'react-router-dom'
import BookList from '../../components/BookList'
import { useFetch } from '../../hooks/useFetch'
import './Search.css'

function Search() {
	const queryString = useLocation().search
	const queryParams = new URLSearchParams(queryString)
	const query = queryParams.get('q')

	const url = 'http://localhost:3000/books?q=' + query
	const { error, isPending, data } = useFetch(url)

	return (
		<div className='search'>
			<h2 className='page-title'>Books including "{query}"</h2>
			{error && <p className='error'>{error}</p>}
			{isPending && <p className='loading'>Loading...</p>}
			{data && <BookList books={data} />}
		</div>
	)
}

export default Search
