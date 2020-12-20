import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AddProduct from './AddProduct'
import CategoryContent from './CategoryContent'
import useCategory from '../hooks/useCategory'

const EditCategory = () => {
	const [addProduct, setAddProduct] = useState(false);
	const { categoryId } = useParams()
	const { loading, products, title } = useCategory(categoryId)
	
	const handleAddProduct = () => {
        setAddProduct(true);
    };

	return (
		<>
			{loading
				? ("Loading...")
				: (<>
					<h2>{title} 🖋</h2>
					{products.length < 1 
						? (<div>Just nu finns det inga produkter i denna kategori</div>)
						: <CategoryContent products={products} />					
					}
		
					{addProduct && <AddProduct categoryId={categoryId} products={products} title={title}/>}

					<Button onClick={handleAddProduct} type="button">Lägg till produkt</Button>

				</>) 
			}
		</>
	)
}

export default EditCategory