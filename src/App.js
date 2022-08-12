import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import './App.css'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Search from './pages/search/Search'
import Book from './pages/book/Book'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'

function App() {
	const { mode } = useTheme()

	return (
		<div className={`App ${mode}`}>
			<BrowserRouter>
				<Navbar />
				<ThemeSelector />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add' element={<Add />} />
					<Route path='/search' element={<Search />} />
					<Route path='/books/:id' element={<Book />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
