import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from "react-bootstrap"

const Products = () => {
    const [products, setProducts] = useState([])
    const restaurantId = localStorage.getItem("restaurantId")
    useEffect(() => {
        const fetchData = async () => {
            const getData = await axios.get(`https://server-tasty.onrender.com/products`)
            console.log(getData.data.data);
            const response = getData.data.data
            console.log(response);
            setProducts(response)
        }
        fetchData()
    }, [])
    return (
        <div>
            {
                // products.length == 0 ?
                //     <h1>No data found</h1>
                //     :
                products.map((x) => (
                    <Card key={x._id} style={{ width: '18rem', margin: '1rem' }}>
                        <img src={x.image} alt={x.name} style={{ height: "200px", objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title>{x.name}</Card.Title>
                            <Card.Text>₹{x.price}</Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Products