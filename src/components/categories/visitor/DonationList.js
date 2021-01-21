import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { TrashFill } from 'react-bootstrap-icons'
import { useStorage } from '../../../contexts/StorageContext'

const DonationList = () => {
	const [productList, setProductList] = useState(null)
	const { changes, donationComplete, removeFromStorage, retrieveFromStorage } = useStorage()

	useEffect(() => {
		setProductList(retrieveFromStorage('products'));
	}, [changes]);

	const handleRemoveItem = (index) => {
		setProductList(removeFromStorage('products', index));
	}

	return (
		<>
			{productList && productList.length > 0 && 
				<Row className="container donation-card">
					<Col>
						{donationComplete 
							? <div>
								<h2 className="heading__sidebar--completed">Du har valt att donera 24 saker - TACK!</h2>
								<p className="ingress">Vill du <Link to='/upphamtning' className="link text-link">boka upphämtning</Link> eller <Link to='/inlamning' className="link text-link">lämna in</Link> till någon av våra lokaler?</p>
							</div>
							: <h2 className="heading__sidebar">Jag vill donera:</h2>									
						}

						<ol className="donation-list">
							{productList.map((item, index) => (				
								<li key={index} className="list-item">
									{item}
									<TrashFill className="icon icon__delete icon__delete--item" onClick={() => {handleRemoveItem(index)}}/>
								</li>
							))}
						</ol>
					</Col>
				</Row>
			}
		</>
	)
}

export default DonationList