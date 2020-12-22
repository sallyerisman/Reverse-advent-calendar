import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/app.scss'

import AuthContextProvider from './contexts/AuthContext'
import StorageContextProvider from './contexts/StorageContext'

import AddCategory from './components/AddCategory'
import AuthRoute from './components/AuthRoute'
import Category from './components/Category'
import Categories from './components/Categories'
import DonationList from './components/DonationList'
import EditCategory from './components/EditCategory'
import EditCategories from './components/EditCategories'
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
				<Navigation />

				<StorageContextProvider>
				<Container>
					<DonationList />
					<Routes>
						<Route path="/">
							<Home />
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
									<EditCategories />
								</Route>

								<Route path="/:categoryId">
									<EditCategory />
								</Route>
							</AuthRoute>

							<AuthRoute path="/utloggning">
								<Logout />								
							</AuthRoute>
						</Route>

						<Route path="*" element={<NotFound />} />

					</Routes>
				</Container>
				</StorageContextProvider>
			</AuthContextProvider>
		</Router>
	)
}

export default App