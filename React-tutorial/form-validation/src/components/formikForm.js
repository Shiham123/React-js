import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>from validation with YUP and formik library</h1>
      <div style={{ padding: '10px' }}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div style={{ padding: '10px' }}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div style={{ padding: '10px' }}>
        <label htmlFor="name">Password : </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="success">
        Submit form
      </Button>
    </form>
  );
}

export default SignUp;
