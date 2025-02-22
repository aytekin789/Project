import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function AdminProduct() {
    const[product, setProduct] = useState([])
   function GetData (){
       fetch("https://fakestoreapi.com/products")
       .then((res)=>res.json())
       .then(data=>setProduct(data))
   }
       useEffect(() => {
        GetData();
      }, []);

      function deleteItemById(id) {
        fetch("https://fakestoreapi.com/products" + id, {
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
            <tr key={x.id}>
              <td style={{ border: "solid gray" }}>{x.image}</td>
              <td style={{ border: "solid gray" }}>{x.title}</td>
              <td style={{ border: "solid gray" }}>{x.description}</td>
              <td style={{ border: "solid gray" }}>{x.category}</td>
              <td style={{ border: "solid gray" }}>{x.price}AZN</td>
              <td style={{ border: "solid gray" }}>
                <button
                  onClick={() => deleteItemById(x.id)}
                  style={{ backgroundColor: "red" }}
                >
                  DELETE
                </button>
              </td>
              <td style={{ border: "solid gray" }}>
              
                  <button
                  onClick={() => navigate(`/edit/${x.id}`)} 
                   style={{backgroundColor:"green" }}>EDIT</button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}