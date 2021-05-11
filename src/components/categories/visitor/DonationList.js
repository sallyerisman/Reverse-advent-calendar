import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TrashFill } from 'react-bootstrap-icons'
import { useStorage } from '../../../contexts/StorageContext'

const DonationList = () => {
	const [countedList, setCountedList] = useState(null)
	const [productList, setProductList] = useState(null)
	const { changes, donationComplete, removeFromStorage, retrieveFromStorage } = useStorage()

	const handleCount = (productList) => {
		const count = {}
		
		productList && productList.forEach(item => {
			if (count[item]) {
			   count[item] +=1
			   return
			}

			count[item] = 1
		})
		
		setCountedList(Object.entries(count));
	}

	const handleRemoveItem = (item) => {
		setProductList(removeFromStorage('products', item));
	}

	useEffect(() => {
		const setProducts = retrieveFromStorage('products');

		setProductList(setProducts);
		handleCount(setProducts);
		
	}, [changes]);

	return (
		<>
			{productList && productList.length > 0 && 
				<div className="donation-card">
					{donationComplete 
						? <div>
							<h2 className="heading__sidebar--completed">Du har valt att donera 24 saker - TACK!</h2>
							<p className="ingress">Vill du <Link to='/upphamtning' className="link text-link">boka upphämtning</Link> eller <Link to='/inlamning' className="link text-link">lämna in</Link> till någon av våra lokaler?</p>
						</div>
						: <h2 className="heading__sidebar">Jag vill donera:</h2>									
					}
					
					<ol className="donation-list">
						{countedList && countedList.map((item, index) => (			
							<li key={index} className="list-item">
								{item[1] + " x " + item[0]}
								<TrashFill className="icon icon__delete icon__delete--item" onClick={() => {handleRemoveItem(item)}}/>
							</li>
						))}
					</ol>
				</div>
			}
		</>
	)
}

export default DonationList