import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AddProduct from './AddProduct'
import CategoryContent from './CategoryContent'
import EditTitle from './EditTitle'
import useCategory from '../hooks/useCategory'

const EditCategory = () => {
	const [addProduct, setAddProduct] = useState(false);
	const [editTitle, setEditTitle] = useState(false);
	const { categoryId } = useParams()
	const { loading, products, title } = useCategory(categoryId)
	
	const handleAddProduct = () => {
        setAddProduct(true);
	};
	
	const handleEditTitle = () => {
        setEditTitle(true);
    };

	return (
		<>
			{loading
				? ("Loading...")
				: (<>

					{editTitle 
						? <EditTitle categoryId={categoryId} title={title}/> 
						: <h2>{title} <span onClick={handleEditTitle}>🖋</span></h2>
					}

					{products.length < 1 
						? (<div>Just nu finns det inga produkter i denna kategori</div>)
						: <CategoryContent products={products} />					
					}
		
					{addProduct && <AddProduct categoryId={categoryId} products={products} title={title}/>}

					<Button onClick={handleAddProduct} type="button">Lägg till produkt</Button>

					<Link to={`/redigera/`}>Tillbaka till kategorier</Link>

				</>) 
			}
		</>
	)
}

export default EditCategory