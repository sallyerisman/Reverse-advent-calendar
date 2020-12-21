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

	const retrieveFromStorage = (key) => {
		let productList = localStorage.getItem(key);
		productList = productList ? JSON.parse(productList) : null;

		setChanges(false)

		return productList
	}

	const contextValues = {
		addToStorage,
		changes,
		retrieveFromStorage,
	}

	return (
		<StorageContext.Provider value={contextValues}>
			{props.children}
		</StorageContext.Provider>
	)
}

export { StorageContext, useStorage, StorageContextProvider as default }
