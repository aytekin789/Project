import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Maincontext from '../../../context/mainContext';

function creatElement(obj, setData, data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // headers düzəldildi
    body: JSON.stringify(obj),
  };

  fetch("http://localhost:3000/products/", requestOptions)
    .then((res) => res.json()) // JSON-a çevirmək üçün gözləyirik
    .then((newData) => {
      setData([...data, newData]); // Yeni məhsulu mövcud array-ə əlavə edirik
      console.log("Yeni data:", newData);
    })
    .catch((error) => console.error("Xəta baş verdi:", error)); // Error handling
}

const Add = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(Maincontext); // Context-dən data və setData alırıq

  return (
    <>
      <Helmet>
        <title>ADD</title>
      </Helmet>

      <Formik
        initialValues={{ image: "", title: "", description: "", category: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          category: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values) => {
          creatElement(values, setData, data); // setData və data-ni göndəririk
          navigate("/admin");
        }}
      >
        <Form>
          <label htmlFor="image">IMAGE</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">TITLE</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">DESCRIPTION</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <label htmlFor="category">CATEGORY</label>
          <Field name="category" type="text" />
          <ErrorMessage name="category" />

          <label htmlFor="price">PRICE</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">ADD</button>
        </Form>
      </Formik>
    </>
  );
}

export default Add;
