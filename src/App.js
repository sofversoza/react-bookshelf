import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Search from './pages/search/Search'
import Book from './pages/book/Book'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

function App() {
	const { mode } = useTheme()

	return (
		<div className={`App ${mode}`}>
			<BrowserRouter>
				<Navbar />
				<ThemeSelector />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/add'>
						<Add />
					</Route>
					<Route exact path='/search'>
						<Search />
					</Route>
					<Route exact path='/books/:id'>
						<Book />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
