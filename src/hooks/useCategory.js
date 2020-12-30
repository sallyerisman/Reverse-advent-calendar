import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const useCategory = () => {
	const { categoryUrl } = useParams()

	const [loading, setLoading] = useState(true)
	const [notFound, setNotFound] = useState(false)
	const [category, setCategory] = useState({})

	useEffect(async () => {		
			let documentId; 

			await db.collection('categories')
			.where('urlParam', '==', categoryUrl)
			.get()
			.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				documentId = doc.id;
				});
			});

			if (!documentId) {
				setNotFound(true)
				return;				
			} 

			db.collection('categories').doc(documentId)
			.onSnapshot(async (doc) => {
				const data = doc.data();

				if (!data) {
					return;
				} else {
					setCategory({
						products: await data.products && data.products.sort(),
						title: await data.title,
						id: doc.id,
						urlParam: categoryUrl,
					})

					setLoading(false)
				}
			});	
	}, []);

	return { category, loading, notFound }
}

export default useCategory

