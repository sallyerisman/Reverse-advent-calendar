import { useEffect, useState } from 'react'
import { db } from '../firebase'

const useCategory = (categoryId) => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])
	const [title, setTitle] = useState("")

	useEffect(() => {
		// Snapshot listener for specific document in 'categories' collection
		const unSubscribe = db.collection('categories').doc(categoryId)
			.onSnapshot(async (doc) => {
				const data = doc.data();

				if (!data) {
					return;
				} else {	
					await data.products && setProducts(Object.values(data.products));					
					setTitle(await data.title);
					setLoading(false)
				}
			});
			return unSubscribe

	  	}, []);
	
	return { loading, products, title }
}

export default useCategory

