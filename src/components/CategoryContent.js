import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import useDeleteProduct from '../hooks/useDeleteProduct'

const CategoryContent = ({ products }) => {
	const { categoryId } = useParams()
	const { currentUser } = useAuth()
	const [deleteProduct, setDeleteProduct] = useState(null);
	useDeleteProduct(categoryId, deleteProduct, products);

	const handleDeleteProduct = (product) => {
		setDeleteProduct(product);
	}

	return (
		<ul>
			{products.map((product) => (				
				<li key={product}>
					{product}
					{currentUser && 
						<span 
							onClick={() => {handleDeleteProduct(product)
						}}>
							🗑
						</span>}
				</li>
			))}
		</ul>
	)
}

export default CategoryContent
