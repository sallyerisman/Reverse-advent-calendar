import { useEffect, useState } from 'react'
import { db } from '../firebase'

const useCategory = (categoryId) => {
	const [title, setTitle] = useState("")
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
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

