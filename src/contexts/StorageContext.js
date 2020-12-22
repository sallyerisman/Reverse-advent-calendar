import { createContext, useContext, useState } from 'react';

const StorageContext = createContext()

const useStorage = () => {
	return useContext(StorageContext)
}

const StorageContextProvider = (props) => {
	const [changes, setChanges] = useState(false)

	const addToStorage = (key, value) => {		
		let existingValue = localStorage.getItem(key);
		existingValue = existingValue ? JSON.parse(existingValue) : [];
		existingValue.push(value);

		const stringifiedProductsList = JSON.stringify(existingValue);
		localStorage.setItem(key, stringifiedProductsList);

		setChanges(true)
	}

	const removeFromStorage = (key, index) => {		
		let existingProducts = localStorage.getItem(key);
		existingProducts = existingProducts && JSON.parse(existingProducts);		
		existingProducts.splice(index, 1);

		const stringifiedProductsList = JSON.stringify(existingProducts);
		localStorage.setItem(key, stringifiedProductsList);

		setChanges(true)
	}

	const retrieveFromStorage = (key) => {
		let productList = localStorage.getItem(key);
		productList = productList ? JSON.parse(productList) : null;

		setChanges(false)

		return productList
	}

	const contextValues = {
		addToStorage,
		changes,
		removeFromStorage,
		retrieveFromStorage,
	}

	return (
		<StorageContext.Provider value={contextValues}>
			{props.children}
		</StorageContext.Provider>
	)
}

export { StorageContext, useStorage, StorageContextProvider as default }