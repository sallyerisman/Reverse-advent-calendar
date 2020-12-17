import { useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import CategoryContent from './CategoryContent'
import useCategory from '../hooks/useCategory'

const EditCategory = () => {
	const { categoryId } = useParams()
	const { currentUser } = useAuth()
	const { loading, products, title } = useCategory(categoryId)

	return (
		<>
			{loading
				? ("Loading...")
				: (<>
					<h2>{title}</h2>
					{currentUser && (<CategoryContent products={products} />)
					}
				</>) 
			}
		</>
	)
}

export default EditCategory