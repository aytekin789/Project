import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [detail, setDetail]= useState({});
  const {id} = useParams();
  useEffect(()=> {
    fetch(`http://localhost:3000/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>setDetail(data))
  }, [])
  return (
    <>
     <Helmet><title>DETAIL</title></Helmet> 
     <div className="card">
      <img src={detail.image} alt="" />
      <h1>{detail.title}</h1>
      <p>{detail.description}</p>
      <h2>{detail.price}AZN</h2>
     </div>
    </>
  )
}

