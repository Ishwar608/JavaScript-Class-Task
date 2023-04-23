import { useFormik } from 'formik';
import React from 'react'
import { Card, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from "yup";

export default function Registration() {

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Field can not be blank')
    ,
    lastName: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Field can not be blank'),
    email: Yup.string()
      .email('Invalid email')
      .required('Field can not be blank'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Digit Only!')
      .max(10, 'Too Long!')
      .required('Field can not be blank'),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8}$/, 'Min 1 uppercase letter,Min 1 lowercase letter,Min 1 special character,8 characters!')
      .required('Field can not be blank'),
    passwordConfirm: Yup.string()
      .required('Field can not be blank')
      .oneOf([null, Yup.ref('password')], 'Password should match')
    ,
    acceptTerms: Yup.boolean()
      .oneOf([true], 'You must accept terms')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordConfirm: '',
      acceptTerms: false
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      console.log(values);
    },

  });
  return (

    <Row className='justify-content-center mt-5'>
      <Card
        className='shadow bg-white col-lg-4 col-md-6 col-sm-8 p-4'
      >
        <Card.Title className='text-center'>Sign-Up</Card.Title>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Enter Fisrt Name</Form.Label>
            <Form.Control
              type="text"
              name='firstName'
              placeholder="Enter First Name"
              onChange={formik.handleChange}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.firstName && formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Enter Your last Name</Form.Label>
            <Form.Control
              type="text"
              name='lastName'
              placeholder="Enter Last Name"
              onChange={formik.handleChange}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.lastName && formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

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
            <Form.Label>Enter Your Mobile No.</Form.Label>
            <Form.Control
              type="text"
              name='phoneNumber'
              placeholder="Enter Mobile No"
              onChange={formik.handleChange}
              isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.phoneNumber && formik.errors.phoneNumber}
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

          <Form.Group className="mb-3" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name='passwordConfirm'
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              name="acceptTerms"
              label="Agree to terms and conditions"
              onChange={formik.handleChange}
              isInvalid={formik.touched.acceptTerms && formik.errors.acceptTerms}
              feedback={formik.touched.acceptTerms && formik.errors.acceptTerms}
              feedbackType="invalid"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Row>


  )
}
