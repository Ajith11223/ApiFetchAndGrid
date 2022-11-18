import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Product.css'

export const Product = () => {

    const [product, setProduct] = useState([])
    const [active, setActive] = useState(true)
    const [details, setDetails] = useState({})


    useEffect(() => {
        api()

    }, [])


    const api = async () => {

        const { data } = await axios.get("http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products ")
        console.log(data.data, "hhhhhhhhhhhhhhhh");
        setProduct(data.data)

    }


    const handleSubmit = (productItem) => {
        console.log(productItem);
        setDetails(productItem)

        setActive(false)
    }





    return (
        <>

            <div className="nav">
                <a href="" classNmae="logo">Product</a>

            </div>


            <div className="container">
                <h2 className="title">Products</h2>
                {active ? <div className="shop-content">
                    {product.map((item) => {

                        return (
                            <div className="food-box">
                                <div className="pic">
                                    <img className="food-image" src={item.image}
                                        alt="" />


                                    <h2 classNAme="food-title">{item.name}</h2>
                                    <h2 classNAme="food-title">MRP.{(item.priceDetails)[0]?.mrp}</h2>
                                    <h2 classNAme="food-title">Qty.{(item.priceDetails)[0]?.quantity}</h2>
                                </div>

                              
                                <button classNAme=".add-cart"  onClick={() => handleSubmit(item)}> cart </button>
                            </div>

                        )
                    })}


                </div> :
                    // //////////////////////////////////////////////////////////////////
                    <div className="shop-content">

                        <div className="food-box">
                            <div className="pic">
                                <img className="food-image" style={{ width: '300px', height: "300px" }} src={details.image}
                                    alt="" />
                            </div>

                            <span className="food-price">{details.name}</span><br />
                            <span className="food-price" style={{ color: "green" }}>Desc:{details.productDescription}</span><br />
                            <span className="food-price">Qty:{details.priceDetails[0].quantity}</span><br />
                            <span className="food-price">Price:{details.priceDetails[0]?.mrp}</span><br />
                            

                        </div>

                    </div>
                }
            </div>
        </>
    )
}

export default Product