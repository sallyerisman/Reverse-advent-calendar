import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { useStorage } from '../../contexts/StorageContext'
import useDeleteProduct from '../../hooks/useDeleteProduct'

const CategoryContent = ({ categoryId, products }) => {
	const { addToStorage, changes, retrieveFromStorage } = useStorage()
	const { currentUser } = useAuth()
	const [deleteProduct, setDeleteProduct] = useState(null)
	const [productList, setProductList] = useState(null)
	useDeleteProduct(categoryId, deleteProduct, products)

	useEffect(() => {
		setProductList(retrieveFromStorage('products'));
	}, [changes]);

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
						? <Button className="btn btn__delete-product" onClick={() => {handleDeleteProduct(product)}}>Ta bort</Button>
						: productList && productList.length < 24 &&
							<Button onClick={() => {handleDonateProduct(product)}}>Donera</Button>
					}
				</li>
			))}
		</ul>
	)
}

export default CategoryContent
