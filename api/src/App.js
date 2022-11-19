import { useEffect, useState } from 'react';
import './App.css';
import Product from './component/product/Product.js';
import axios from 'axios'
import Cart from './component/Cart/Cart';
import { Routes, Route } from "react-router-dom";




function App() {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const api = async () => {
            const { data } = await axios.get("http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products ")
            setProduct(data.data)
        }
        api()
    }, [])
    return (
        <div >
            <Routes>
                <Route path='/' element={<Product product={product}/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </div>
    );
}

export default App;
