import useCategories from '../hooks/useCategories'
import CategoryGrid from './CategoryGrid'

const Categories = () => {
	const { categories, loading } = useCategories()

	return (
		<>
			<h2>Vad vi behöver just nu</h2>

			{
				loading
					? ("Loading...")
					: (<CategoryGrid categories={categories} />)
			}
		</>
	)
}

export default Categories
