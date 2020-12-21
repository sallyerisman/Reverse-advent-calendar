import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'
import useDeleteProduct from '../hooks/useDeleteProduct'

const CategoryContent = ({ products }) => {
	const { addToStorage } = useStorage()
	const { categoryId } = useParams()
	const { currentUser } = useAuth()
	const [deleteProduct, setDeleteProduct] = useState(null)

	useDeleteProduct(categoryId, deleteProduct, products)

	const handleDeleteProduct = (product) => {
		setDeleteProduct(product);
	}

	const handleDonateProduct = (product) => {
		addToStorage('products', product);
	}

	return (
		<ul>
			{products.map((product) => (				
				<li key={product}>
					{product}
					{currentUser  
						? <Button onClick={() => {handleDeleteProduct(product)}}>Ta bort</Button>
						: <Button onClick={() => {handleDonateProduct(product)}}>Donera</Button>
					}
				</li>
			))}
		</ul>
	)
}

export default CategoryContent
