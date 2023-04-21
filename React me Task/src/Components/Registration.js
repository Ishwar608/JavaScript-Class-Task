import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
export default function Registration() {

    const validationSchema = Yup.object().shape({
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
    })
    return (
        <div className='FormDiv'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    passwordConfirm: '',
                    acceptTerms: true
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    axios.post('https://dev.equityfundingscript.com/api/v1.1/users/signup?lng=en', values).then(y => {
                        console.log(y);
                    })
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="Enter your First Name" />
                        <ErrorMessage name='firstName' />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Enter your Last Name" />
                        <ErrorMessage name='lastName' />


                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <ErrorMessage name='email' />

                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field id="phoneNumber" name="phoneNumber" placeholder="Enter your Phone" />
                        <ErrorMessage name='phoneNumber' />

                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <Field type='password' id="password" name="password" placeholder="Enter your Password" />
                        <ErrorMessage name='password' />

                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <Field type='password' id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" />
                        <ErrorMessage name='passwordConfirm' />

                    </div>
                    <div>
                        <label htmlFor="acceptTerms">Accept Terms & Conditions</label>
                        <Field type='checkbox' id="lastName" name="acceptTerms" />
                        <ErrorMessage name='acceptTerms' />

                    </div>



                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
