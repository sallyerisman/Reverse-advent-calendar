import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const useCategory = () => {
	const { categoryUrl } = useParams()
	const [category, setCategory] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = db.collection('categories')
			.where('urlParam', '==', categoryUrl)
			.onSnapshot(querySnapshot => {
				querySnapshot.forEach(doc => {	
					const documentId = doc.id;
					const data = doc.data();

					if (!data) {
						return;
					} else {
						setCategory({
							products: data.products && data.products.sort(),
							title: data.title,
							id: documentId,
							urlParam: categoryUrl,
						})
					};

					setLoading(false)
				});
			})
		return unsubscribe
	}, [])

	return { category, loading }
}

export default useCategory

