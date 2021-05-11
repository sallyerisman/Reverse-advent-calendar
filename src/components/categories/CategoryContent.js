import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { TrashFill } from 'react-bootstrap-icons'
import { useAuth } from '../../contexts/AuthContext'
import { useStorage } from '../../contexts/StorageContext'
import useDeleteProduct from '../../hooks/useDeleteProduct'

const CategoryContent = ({ categoryId, products }) => {
	const [deleteProduct, setDeleteProduct] = useState(null)
	const [productList, setProductList] = useState(null)

	const { addToStorage, changes, retrieveFromStorage } = useStorage()
	const { currentUser } = useAuth()
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
		<>
			{products.map(product => (
				<Card key={product}>
					<Card.Body>
						<Card.Title>{product}</Card.Title>
						{currentUser  
							? <TrashFill 
								className="icon icon__delete icon__delete--product" 
								onClick={() => {handleDeleteProduct(product)}}
							/>
							: productList && productList.length < 24 
								? <Button className="button__secondary" onClick={() => {handleDonateProduct(product)}}>Donera</Button>
								: <Button className="button__secondary button--hide" onClick={() => {handleDonateProduct(product)}}>Donera</Button>
						}
					</Card.Body>
				</Card>
			))}
		</>
	)
}

export default CategoryContent
