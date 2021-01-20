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
		<Row>
			{productList && productList.length > 0 && 
				<Col >
					{donationComplete 
						? <div>
							<h2>Underbart, du har uppnått 24 saker att donera - TACK!</h2>
							<p>Vill du <Link to='/upphamtning'>boka upphämtning</Link> eller <Link to='/inlamning'>lämna in</Link> till någon av våra lokaler?</p>
						</div>
						: <h2>Jag vill donera:</h2>									
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
			}
		</Row>
	)
}

export default DonationList