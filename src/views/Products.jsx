import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    

    return <div className='container product-list row text-center justify-content-evenly mx-auto'>
        {
            products.map(product => {
                return <Card className="col-3 m-2 align-items-center">
                    <Card.Img className='w-75' variant="top" src={product.image} alt={product.title} />
                    <Card.Body>
                        <Card.Title className='text-danger'>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Link to={`/store/product/${product.id}`}>
                            <Button variant="primary">Show Details</Button>
                        </Link>
                    </Card.Body>
                    </Card>

            })
        }
    </div>
}

export default Products