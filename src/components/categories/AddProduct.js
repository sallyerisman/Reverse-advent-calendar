import { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { db } from '../../firebase'

const AddProduct = ({ category }) => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [product, setProduct] = useState("")
	const [productExists, setProductExists] = useState(false)
	const { id, products, title, urlParam } = category

	const handleProductChange = (e) => {
		setProductExists(false)
		setProduct(e.target.value)
	}

	const handleAddProduct = async (e) => {
		if (product.length < 2) {
			return;
		}

		setError(false)
		setLoading(true)

		const capitalizedProduct = product.charAt(0).toUpperCase() + product.slice(1)

		if (products.includes(capitalizedProduct)) {
			setLoading(false)
			setProductExists(true)
			return;
		}

		try {
			setLoading(true)

			// Add product to the specified document
			await db.collection('categories').doc(id).set({
				title,
				products: [...products, capitalizedProduct],
				urlParam,				
			});

			setLoading(false)
			setProduct("")

		} catch (e) {
			setError("Något gick fel och produkten kunde inte läggas till. Var god försök igen.")
			setLoading(false)
		}
	}

	return (
		<>
			{error && <Alert variant="danger">{error}</Alert>}

			<Form.Group id="product">
				<Form.Label>Namn på produkten</Form.Label>
				<Form.Control type="product" onChange={handleProductChange} value={product} autoFocus />
				
				{product && product.length < 2 && 
					<Form.Text className="text__alert">Namnet på produkten måste vara minst 2 tecken långt.</Form.Text>
				}

				{productExists && 
					<Form.Text className="text__alert">Denna produkt finns redan i denna kategori.</Form.Text>
				}					
			</Form.Group>
			<Button disabled={loading} className="btn btn__add-product" onClick={handleAddProduct}>Lägg till</Button>
		</>
	)
}

export default AddProduct

