import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const { state: { id, sellerId } } = useLocation()
  const [details, setDetails] = useState()
  console.log(id, sellerId);
  useEffect(() => {
    const singleData = async () => {
      const { data } = await axios.get(`http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products?_id=${id}&sellerId=${sellerId}`)
      setDetails(data.data)
      console.log("data", data.data);
    }
    singleData()
  }, [id, sellerId])
  console.log(details)
  return (

    <div className='container1'>
      {
        details?.map((item) => (

          <>
            
            <div className="left">
              <img src={item.image} alt="" />

              <div className='leftDiv'>
                <h3>{item.name}</h3>


                <p>{item.productDescription}</p>
              </div>

            </div><div className="right">
              <div className="rightDiv">
                <h3>Brand Name: {item.brandName}</h3>
                <h3>Food Type:{item.foodType}</h3>
                <h3>Qty:{item.priceDetails[0]?.quantity}</h3>
                <h3>Rs:{item.priceDetails[0]?.mrp}</h3>
              </div>
            </div></>
        ))
      }
    </div>

  )
}

export default Cart