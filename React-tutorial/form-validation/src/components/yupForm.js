import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormValidationTwo() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup.string().min(6, 'Name must have two character').required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, 'Password Must have six character')
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  const nameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );

  const emailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );

  const passwordError = formik.touched.password && formik.errors.password && (
    <span>{formik.errors.password}</span>
  );
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>from validation with YUP and formik library</h1>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {nameError}
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {emailError}
      </div>

      <div>
        <label htmlFor="name">Password : </label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {passwordError}
      </div>
      <Button type="submit" variant="success">
        Submit form
      </Button>
    </form>
  );
}

export default FormValidationTwo;
