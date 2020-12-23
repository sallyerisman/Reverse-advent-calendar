import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'

const DonationList = () => {
	const { currentUser } = useAuth()
	const [productList, setProductList] = useState(null)
	const { changes, removeFromStorage, retrieveFromStorage } = useStorage()

	useEffect(() => {
		setProductList(retrieveFromStorage('products'));
	}, [changes]);

	const handleRemoveItem = (index) => {
		setProductList(removeFromStorage('products', index));
	}

	return (
		<Row>
			<Col>
				{!currentUser && productList && productList.length === 24 &&
					<div>Underbart, du har uppnått 24 saker att donera - TACK!</div>
				}

				{!currentUser && productList && 
					<ol>
						{productList.map((item, index) => (				
							<li key={index}>
								{item}
								<Button onClick={() => {handleRemoveItem(index)}}>Ta bort från listan</Button>
							</li>
						))}
					</ol>					
				}
			</Col>
		</Row>
	)
}

export default DonationList