import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"; 

export default function AdminProduct() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate(); 

    function GetData() {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then(data => setProduct(data));
    }

    useEffect(() => {
        GetData();
    }, []);

    function deleteItemById(id) {
        fetch(`http://localhost:3000/products/${id}`, { 
            method: "DELETE",
        }).then(() => GetData());
    }

    return (
        <>
            <Helmet>
                <title>ADMIN</title>
            </Helmet>
            <table>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((x) => (
                        <tr key={x._id}>
                            <td style={{ border: "solid gray" }}>{x.image}</td>
                            <td style={{ border: "solid gray" }}>{x.title}</td>
                            <td style={{ border: "solid gray" }}>{x.description}</td>
                            <td style={{ border: "solid gray" }}>{x.category}</td>
                            <td style={{ border: "solid gray" }}>{x.price} AZN</td>
                            <td style={{ border: "solid gray" }}>
                                <button
                                    onClick={() => deleteItemById(x._id)}
                                    style={{ backgroundColor: "red" }}
                                >
                                    DELETE
                                </button>
                            </td>
                            <td style={{ border: "solid gray" }}>
                                <button
                                    onClick={() => navigate(`/edit/${x._id}`)} 
                                    style={{ backgroundColor: "green" }}
                                >
                                    EDIT
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
