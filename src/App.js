import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './assets/scss/app.scss'

import AuthContextProvider from './contexts/AuthContext'
import StorageContextProvider from './contexts/StorageContext'

import AddCategory from './components/AddCategory'
import AuthRoute from './components/AuthRoute'
import Booking from './components/Booking'
import Categories from './components/Categories'
import Category from './components/Category'
import Contact from './components/Contact'
import DonationList from './components/DonationList'
import ForgotPassword from './components/ForgotPassword'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<StorageContextProvider>
					<Navigation />
					<Container className="site-layout">
						<div className="main">
							<Routes>
								<Route path="/">
									<Home />
								</Route>

								<Route path="/upphamtning">
									<Booking />
								</Route>
								
								<Route path="/inlamning">
									<Contact />
								</Route>

								<Route path="/donera">
									<Route path="/">
										<Categories />
									</Route>

									<Route path="/:categoryId">
										<Category />
									</Route>
								</Route>

								<Route path="/admin">
									<Route path="/">
										<Login />
									</Route>

									<Route path="/aterstall-losenord">
										<ForgotPassword />
									</Route>

									<AuthRoute path="/ny-kategori">
										<AddCategory />
									</AuthRoute>

									<AuthRoute path="/redigera">
										<Route path="/">
											<Categories />
										</Route>

										<Route path="/:categoryId">
											<Category />
										</Route>
									</AuthRoute>

									<AuthRoute path="/utloggning">
										<Logout />								
									</AuthRoute>
								</Route>

								<Route path="*" element={<NotFound />} />
							</Routes>
						</div>
						<div className="sidebar">
							<DonationList />
						</div>
					</Container>
				</StorageContextProvider>
			</AuthContextProvider>
		</Router>
	)
}

export default App