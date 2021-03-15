import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ProductsGrid = () => {
    const [products, setProducts] = useState([])
    let history = useHistory();

    const loadProducts = async () => {
        const apiUri = "http://localhost:8080/api/products"
        const response = await axios.get(apiUri)
        setProducts(response.data.products)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const deleteProduct = async id => {
        const apiUri = "http://localhost:8080/api/products"
        const response = await axios.delete(apiUri + "/" + id)
        setProducts(products.filter(p => p._id !== id))
    }

    const editProduct = id => {
        history.push('/edit/' + id)
    }

    const renderProducts = () => {
        return products.map(product => {
            return (
                <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button onClick={e => editProduct(product._id)}>Edit</button></td>
                    <td><button onClick={e => deleteProduct(product._id)}>delete</button></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table className="table">
                <tbody>
                    {renderProducts()}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsGrid;