import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './assets/scss/app.scss'

import AuthContextProvider from './contexts/AuthContext'
import StorageContextProvider from './contexts/StorageContext'

import AuthRoute from './components/AuthRoute'
import Booking from './components/categories/visitor/Booking'
import Categories from './components/categories/Categories'
import Category from './components/categories/Category'
import Contact from './components/categories/visitor/Contact'
import DonationList from './components/categories/visitor/DonationList'
import Footer from './components/Footer'
import ForgotPassword from './components/adminAccount/ForgotPassword'
import Home from './components/Home'
import Login from './components/adminAccount/Login'
import Logout from './components/adminAccount/Logout'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<StorageContextProvider>
					<Navigation />
					<Container className="site-container">
						<aside className="sidebar">
							<DonationList />
						</aside>

						<main className="main">
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

									<Route path="/:categoryUrl">
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

									<AuthRoute path="/redigera">
										<Route path="/">
											<Categories />
										</Route>

										<Route path="/:categoryUrl">
											<Category />
										</Route>
									</AuthRoute>

									<AuthRoute path="/utloggning">
										<Logout />								
									</AuthRoute>
								</Route>

								<Route path="*" element={<NotFound />} />
							</Routes>
						</main>
					</Container>
				</StorageContextProvider>
			</AuthContextProvider>
			<Footer />
		</Router>
	)
}

export default App