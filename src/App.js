import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AuthContextProvider from './contexts/AuthContext'
import AuthRoute from './components/AuthRoute'
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
						<Route path="/">
							<Home />

							<Route path="/:categoryId">
								<Category />
							</Route>
						</Route>

						<Route path="/admin">
							<Route path="/">
								<Login />
							</Route>

							<AuthRoute path="/redigera">
								<AuthRoute path="/">
									<EditCategories />
								</AuthRoute>

								<AuthRoute path="/:categoryId">
									<EditCategory />
								</AuthRoute>
							</AuthRoute>

							<AuthRoute path="/utloggning">
								<Logout />								
							</AuthRoute>
						</Route>

						<Route path="*" element={<NotFound />} />

					</Routes>
				</Container>
			</AuthContextProvider>
		</Router>
	)
}

export default App