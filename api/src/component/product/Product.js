import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link, useNavigate } from "react-router-dom";


export const Product = ({ product }) => {
    const navigate = useNavigate();
    return (
        <>
            {/* <button onClick={()=>handleSubmit("kk")}>jjj</button> */}

            <div className="nav">
                <a href="" classNmae="logo">Product</a>

            </div>


            <div className="container">
                <h2 className="title">Products</h2>
                <div className="shop-content">
                    {product.map((item, index) => {
                        return (
                            <div className="food-box" key={index}>
                                <div className="pic">
                                    <img className="food-image" src={item.image}
                                        alt="" />
                                    <h2 classNAme="food-title">{item.name}</h2>
                                    <h2 classNAme="food-title">MRP.{(item.priceDetails)[0]?.mrp}</h2>
                                    <h2 classNAme="food-title">Qty.{(item.priceDetails)[0]?.quantity}</h2>
                                </div>
                                <button classNAme="add-cart" onClick={() => { navigate("/cart",{state:{id:item._id,sellerId:item.sellerId}})}}>cart</button>

                            </div>

                        )
                    })}


                </div>

            </div>
        </>
    )
}

export default Product