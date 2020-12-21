import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'

const DonationList = () => {
	const { currentUser } = useAuth()
	const [productList, setProductList] = useState(null)
	const { changes, retrieveFromStorage } = useStorage()

	useEffect(() => {
		setProductList(retrieveFromStorage('products'));
	}, [changes]);

	return (
		<>
			{!currentUser && productList
				? (<ol>{productList.map((item, index) => (				
					<li key={index}>
						{item}
					</li>
				))}
				</ol>)
				: (<p>Nothing to see here...</p>)
			}
		</>
	)
}

export default DonationList