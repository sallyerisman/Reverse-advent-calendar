import { useEffect } from 'react';
import { db } from '../firebase'

const useDeleteProduct = (categoryId, deleteProduct, products) => {

	useEffect(() => {
		if (!deleteProduct) {
			return;
		}

		(async () => {
			const newProductArray = products.filter(product => {
				return product !== deleteProduct
			})

			await db.collection('categories').doc(categoryId).update({
				"products": newProductArray
			});

		})();
	}, [deleteProduct]);

	return {}
}

export default useDeleteProduct
