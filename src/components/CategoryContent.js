import { useAuth } from '../contexts/AuthContext'

const CategoryContent = ({ products }) => {
	const { currentUser } = useAuth()

	return (
		<ul>
			{products.map((product) => (				
				<li key={product}>
					{product}
					{currentUser && "🗑"}
				</li>
			))}
		</ul>
	)
}

export default CategoryContent
