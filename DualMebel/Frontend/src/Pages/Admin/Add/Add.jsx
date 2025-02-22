import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function creatElement(obj) {
  const requestOptions = {
    method: "POST",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };
  fetch("http://localhost:3000/products/", requestOptions).then((res) =>
    res.json()
  );
}

const Add = () => {
   const navigate = useNavigate();
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
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          creatElement(values);
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

export default Add