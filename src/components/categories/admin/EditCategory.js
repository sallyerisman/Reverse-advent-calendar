import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { PencilFill, Plus } from 'react-bootstrap-icons'
import DotLoader from 'react-spinners/DotLoader'
import useCategory from '../../../hooks/useCategory'
import AddProduct from './AddProduct'
import CategoryContent from '../CategoryContent'
import EditTitle from './EditTitle'

const EditCategory = () => {
	const [addProduct, setAddProduct] = useState(false)
	const [editTitle, setEditTitle] = useState(false)

	const { category, loading } = useCategory()

	const handleAddProduct = () => {
        setAddProduct(true);
	};
	
	const handleEditTitle = () => {
        setEditTitle(true);
	};
	
	return (
		<>
			{loading
				? <div className="spinner-wrapper"><DotLoader color="#ffffff"/></div>
				: editTitle 
					? <EditTitle category={category}/> 
					: <>
						<h1>
							{category.title} 

							<div onClick={handleEditTitle}	className="edit-text"
								>Ändra titel
								<PencilFill className="icon icon__edit" />
							</div>
						</h1>
			

						{category.products.length < 1 
							? <div>Just nu finns det inga produkter i denna kategori</div>
							: <CategoryContent categoryId={category.id} products={category.products} />					
						}

						{addProduct 
							? <AddProduct category={category}/>
							: <div className="button-wrapper button-wrapper__add-product">
								<Button onClick={handleAddProduct} type="button" className="button__primary">
									<Plus className="icon button-icon" />
									Lägg till produkt
								</Button>
							</div>								
						}
					</>
			}

		</>
	)
}

export default EditCategory