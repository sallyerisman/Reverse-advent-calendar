import { useState } from 'react'
import { Row, Form, Button, Alert } from 'react-bootstrap'
import { db } from '../firebase'

const AddProduct = ({ categoryId, products, title }) => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [product, setProduct] = useState("")

	const handleProductChange = (e) => {
		setProduct(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (product.length < 2) {
			return;
		}

		setError(false)
		setLoading(true)

		try {

			await db.collection('categories').doc(categoryId).set({
				title,
				products: [...products, product]
			});

			setLoading(false)
			setProduct("")

		} catch (e) {
			setError(e.message)
			setLoading(false)
		}
	}

	return (
		<Row>
			{error && (<Alert variant="danger">{error}</Alert>)}

			<Form onSubmit={handleSubmit}>

				<Form.Group id="product">
					<Form.Label>Namn på produkten</Form.Label>
					<Form.Control type="product" onChange={handleProductChange} value={product} />
					{product && product.length < 2 && (
						<Form.Text className="text__alert">Namnet på produkten måste vara minst 2 tecken långt.</Form.Text>
					)}
				</Form.Group>
				<Button disabled={loading} type="submit">Lägg till</Button>
			</Form>
		</Row>
	)
}

export default AddProduct

