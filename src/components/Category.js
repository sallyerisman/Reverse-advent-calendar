import { useParams } from 'react-router-dom'
import CategoryContent from './CategoryContent'
import useCategory from '../hooks/useCategory'

const Category = () => {
	const { categoryId } = useParams()
	const { loading, products, title } = useCategory(categoryId)

	return (
		<>
			{loading
				? ("Loading...")
				: (<>
					<h2>{title}</h2>
					<CategoryContent products={products} />
				</>) 
			}
		</>
	)
}

export default Category


