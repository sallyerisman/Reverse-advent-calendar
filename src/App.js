import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AuthContextProvider from './contexts/AuthContext'
import Category from './components/Category'
import EditCategories from './components/EditCategories'
import EditCategory from './components/EditCategory'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import './assets/scss/app.scss'

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<Navigation />
				<Container>
					<Routes>
						<Route path="/donera">
							<Route path="/">
								<Home />
							</Route>

							<Route path="/:categoryId">
								<Category />
							</Route>
						</Route>

						<Route path="/admin">
							<Route path="/">
								<Login />
							</Route>

							<Route path="/donera">
								<Route path="/">
									<EditCategories />
								</Route>

								<Route path="/:categoryId">
									<EditCategory />
								</Route>

								<Route path="/utloggning">
									<Logout />
								</Route>
							</Route>
						</Route>

						<Route path="*" element={<NotFound />} />

					</Routes>
				</Container>
			</AuthContextProvider>
		</Router>
	)
}

export default App