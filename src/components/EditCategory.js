import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import useCategory from '../hooks/useCategory'
import AddProduct from './AddProduct'
import CategoryContent from './CategoryContent'
import EditTitle from './EditTitle'

const EditCategory = () => {
	const [addProduct, setAddProduct] = useState(false);
	const [editTitle, setEditTitle] = useState(false);
	const { category, loading } = useCategory()
	const { id, products } = category
	
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
							? <EditTitle category={category}/> 
							: <h2>{category.title} <span onClick={handleEditTitle}>🖋</span></h2>
						}

						{category.products.length < 1 
							? <div>Just nu finns det inga produkter i denna kategori</div>
							: <CategoryContent categoryId={id} products={products} />					
						}
			
						{addProduct 
							? <AddProduct category={category}/>
							: <Button onClick={handleAddProduct} type="button">Lägg till produkt</Button>
						}
					</> 
				}
			</Col>
		</Row>
	)
}

export default EditCategory