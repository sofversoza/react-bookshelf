import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Search from './pages/search/Search'
import Book from './pages/book/Book'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/add'>
						<Add />
					</Route>
					<Route path='/search'>
						<Search />
					</Route>
					<Route path='/books/:id'>
						<Book />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
