import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import useCategories from '../hooks/useCategories'
import CategoryGrid from './CategoryGrid'

const EditCategories = () => {
	const { currentUser } = useAuth()
	const { categories, loading } = useCategories()

	return (
		<>
			<h2>Vad vi behöver just nu</h2>

			{
				loading
					? ("Loading...")
					: (<CategoryGrid categories={categories} />)
			}

			{currentUser && (
				<div>
					<Link to="/admin/ny-kategori" className="btn btn__add-category">Lägg till ny kategori</Link>
				</div>
			)}
		</>
	)
}

export default EditCategories
