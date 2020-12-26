import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import useCategory from '../hooks/useCategory'
import AddProduct from './AddProduct'
import CategoryContent from './CategoryContent'
import EditTitle from './EditTitle'

const EditCategory = ({ categoryId }) => {
	const [addProduct, setAddProduct] = useState(false);
	const [editTitle, setEditTitle] = useState(false);
	const { loading, products, title } = useCategory(categoryId)
	
	const handleAddProduct = () => {
        setAddProduct(true);
	};
	
	const handleEditTitle = () => {
        setEditTitle(true);
    };

	return (
		<Row>
			<Col>
				{loading
					? <DotLoader className="loading-spinner"/>
					: <>
						{editTitle 
							? <EditTitle categoryId={categoryId} title={title}/> 
							: <h2>{title} <span onClick={handleEditTitle}>🖋</span></h2>
						}

						{products.length < 1 
							? <div>Just nu finns det inga produkter i denna kategori</div>
							: <CategoryContent categoryId={categoryId} products={products} />					
						}
			
						{addProduct 
							? <AddProduct categoryId={categoryId} products={products} title={title}/>
							: <Button onClick={handleAddProduct} type="button">Lägg till produkt</Button>
						}
					</> 
				}
			</Col>
		</Row>
	)
}

export default EditCategory