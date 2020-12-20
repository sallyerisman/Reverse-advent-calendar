import { useEffect } from 'react';
import { db } from '../firebase'

const useDeleteCategory = (deleteCategory) => {

	useEffect(() => {
		if (!deleteCategory) {
			return;
		}

		(async () => {
			await db.collection('categories').doc(deleteCategory).delete();
		})();
	}, [deleteCategory]);

	return {}
}

export default useDeleteCategory
