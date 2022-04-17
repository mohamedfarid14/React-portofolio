import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

const Product = () => {
    const params = useParams();

    const [product, setProduct] = useState([]);

    const fetchProduct = ()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }

    useEffect(() => {
      fetchProduct()
    }, [])
    

    return <div className="container d-flex justify-content-evenly border p-3">
        <img className="w-25" src={product.image} alt={product.title} />
        <div className="col-6">
            <h1 className="text-danger">{product.title}</h1>
            <p className="fs-5 fw-light">{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    </div>
}

export default Product