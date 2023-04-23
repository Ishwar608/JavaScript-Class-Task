import { useFormik } from 'formik';
import React from 'react'
import { Card, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from "yup";

export default function Login() {

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter Your Email!'),

    password: Yup.string()
      .required("Please Enter Password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      console.log(values);
    },

  });
  return (
    <Row className='justify-content-center mt-5'>
      <Card
        className='shadow bg-white col-lg-5 col-md-6 col-sm-8 p-4'
      >
        <Card.Title className='text-center'>Login</Card.Title>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name='email'
              placeholder="Enter email"
              onChange={formik.handleChange}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.email && formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name='password'
              placeholder="Password"
              onChange={formik.handleChange}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.password && formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Row>

  )
}
