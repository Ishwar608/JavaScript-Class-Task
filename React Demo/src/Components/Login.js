import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({ setLgout, setRegi }) {

    const myNav = useNavigate();
    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .email('Invalid email')
            .required('Field can not be blank'),

        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8}$/, 'Min 1 uppercase letter,Min 1 lowercase letter,Min 1 special character,8 characters!')
            .required('Field can not be blank'),

    })
    return (
        <div className='FormDiv'>
            <h2>Login</h2>
            <Formik
                initialValues={{

                    email: '',
                    password: '',

                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    axios.post('https://dev.equityfundingscript.com/api/v1.1/users/login?lng=en', values).then(y => {
                        console.log(y);
                        if (y.status === 200) {
                            localStorage.setItem('TOKEN', JSON.stringify(y.data.token))
                            setLgout(true);
                            setRegi(false);
                            myNav('/user')
                        }
                    })
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <ErrorMessage name='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password :</label>
                        <Field type='password' id="password" name="password" placeholder="Enter your Password" />
                        <ErrorMessage name='password' />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
