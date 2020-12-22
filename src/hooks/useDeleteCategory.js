import { useEffect } from 'react';
import { db } from '../firebase'

const useDeleteCategory = (categoryId) => {

	useEffect(() => {
		if (!categoryId) {
			return;
		}

		(async () => {
			await db.collection('categories').doc(categoryId).delete();
		})();
	}, [categoryId]);

	return {}
}

export default useDeleteCategory
