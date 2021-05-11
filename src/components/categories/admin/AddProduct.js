import { useRef, useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import DotLoader from 'react-spinners/DotLoader'
import { db } from '../../../firebase'

const AddProduct = ({ category }) => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [product, setProduct] = useState("")
	const valueInput = useRef(null);

	const [productExists, setProductExists] = useState(false)
	const { id, products, title, urlParam } = category

	const handleProductChange = (e) => {
		setProductExists(false)
		setProduct(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		
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
			valueInput.current.focus()

		} catch (e) {
			setError("Något gick fel och produkten kunde inte läggas till. Var god försök igen.")
			setLoading(false)
		}
	}

	return (
		<Row className="page page__add-product">
			<Col>
				{error && <Alert variant="danger">{error}</Alert>}

				{loading
					? <div className="spinner-wrapper"><DotLoader color="#ffffff"/></div>
					: <Form onSubmit={handleSubmit}>
						<Form.Group id="product">
							<Form.Control placeholder="Namn på produkten" type="product" onChange={handleProductChange} ref={valueInput} value={product} autoFocus />
							
							{product && product.length < 2 && 
								<Form.Text className="text__alert">Namnet på produkten måste vara minst 2 tecken långt.</Form.Text>
							}

							{productExists && 
								<Form.Text className="text__alert">Denna produkt finns redan i denna kategori.</Form.Text>
							}					
						</Form.Group>

						<div className="button-wrapper">
							<Button className="button__primary" type="submit">
								<Plus className="icon button-icon" />
								Lägg till
							</Button>								
						</div>
					</Form>
				}
			</Col>
		</Row>
	)
}

export default AddProduct

