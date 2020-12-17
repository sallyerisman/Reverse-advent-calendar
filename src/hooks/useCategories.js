import { useEffect, useState } from 'react'
import { db } from '../firebase'

const useCategories = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Create snapshot listener for all available categories in firebase
		const unsubscribe = db.collection('categories').orderBy('title').onSnapshot(snapshot => {
			setLoading(true)
			const snapshotCategories = []

			snapshot.forEach(doc => {
				snapshotCategories.push({
					id: doc.id,
					...doc.data(),
				})
			})

			setCategories(snapshotCategories)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	return { categories, loading }
}

export default useCategories
