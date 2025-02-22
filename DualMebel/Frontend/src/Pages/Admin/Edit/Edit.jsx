import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        
        fetch(`http://localhost:3000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    async function updateProduct(updatedObj) {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, updatedObj);
            navigate("/admin"); 
        } catch (error) {
            console.error("Məhsulu yeniləyərkən xəta baş verdi:", error);
        }
    }

    if (loading) {
        return <div className="spinner-border text-success" role="status"></div>;
    }

    return (
        <>
            <Helmet>
                <title>Edit Product</title>
            </Helmet>
            <div className="container">
                <h1 className='text-center mb-4'>Edit Product</h1>
                <Formik
                    initialValues={{
                        title: product.title || '',
                        description: product.description || '',
                        image: product.image || '',
                        price: product.price || '',
                        category: product.category || '', 
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Title is required'),
                        description: Yup.string().required('Description is required'),
                        image: Yup.string().url('Invalid URL').required('Image is required'),
                        price: Yup.number().typeError('Price must be a number').required('Price is required'),
                        category: Yup.string().required('Category is required'), 
                    })}
                    onSubmit={(values) => updateProduct(values)}
                >
                    <Form className='d-flex flex-column w-50 p-4 border rounded shadow'>
                        <label htmlFor="title" className="mb-1">Title</label>
                        <Field name="title" type="text" className="form-control mb-2" />
                        <ErrorMessage name="title" component="div" className="text-danger" />

                        <label htmlFor="description" className="mb-1">Description</label>
                        <Field name="description" type="text" className="form-control mb-2" />
                        <ErrorMessage name="description" component="div" className="text-danger" />

                        <label htmlFor="image" className="mb-1">Image</label>
                        <Field name="image" type="text" className="form-control mb-2" />
                        <ErrorMessage name="image" component="div" className="text-danger" />

                        <label htmlFor="price" className="mb-1">Price</label>
                        <Field name="price" type="number" className="form-control mb-3" />
                        <ErrorMessage name="price" component="div" className="text-danger" />

                        <label htmlFor="category" className="mb-1">Category</label>
                        <Field name="category" type="text" className="form-control mb-2" /> 
                        <ErrorMessage name="category" component="div" className="text-danger" />

                        <button type="submit" className="btn btn-success">Update Product</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

