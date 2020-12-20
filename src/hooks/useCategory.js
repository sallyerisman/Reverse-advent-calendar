import { useEffect, useState } from 'react'
import { db } from '../firebase'

const useCategory = (categoryId) => {
	const [title, setTitle] = useState("")
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unSubscribe = db.collection('categories')
			.doc(categoryId)
			.onSnapshot(async (doc) => {
				const title = await doc.data().title;
				const allProducts = await doc.data().products;

				allProducts && setProducts(Object.values(allProducts));
				
				setTitle(title);
				setLoading(false)
			});
			return unSubscribe

	  }, []);
	
	return { loading, products, title }
}

export default useCategory
