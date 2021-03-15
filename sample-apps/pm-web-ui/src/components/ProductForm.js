import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useHistory, useRouteMatch } from "react-router-dom";

function ProductForm(props) {

    let match = useRouteMatch("/edit/:productId")
    let history = useHistory();
    let [product, setProduct] = useState({})

    const loadProduct = async () => {
        if (match) {
            let productId = match.params.productId;
            const apiUri = "http://localhost:8080/api/products"
            const result = await axios.get(apiUri + "/" + productId)
            setProduct(result.data.product)
        }
    }

    useEffect(() => {
        loadProduct()
    }, [])

    const addNewOrUpdateProduct = async formData => {
        if (!match) {
            const apiUri = "http://localhost:8080/api/products"
            const result = await axios.post(apiUri, formData)
        } else {
            const apiUri = "http://localhost:8080/api/products/" + match.params.productId;
            const result = await axios.patch(apiUri, formData)
        }
        history.push("/view-all")
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Formik
                        enableReinitialize
                        initialValues={{ name: product.name, price: product.price, description: product.description }}
                        onSubmit={values => addNewOrUpdateProduct(values)}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input className="form-control"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>description</label>
                                    <textarea className="form-control"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark">submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ProductForm;