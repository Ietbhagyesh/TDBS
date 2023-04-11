import React, { Component } from 'react';
import UserService from '../../services/UserService';
import TempleService from '../../services/TempleService';


import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class CreateTempleComponent extends Component {

    render() {
        return (
            <Formik
                initialValues={{
                    templeName: '',
                    name: '',
                    email: '',
                    mobNo: '',
                    adharNo: '',
                    address: '',
                    password: '',
                    role: 'TempleAdmin'
                }}
                validationSchema={Yup.object().shape({
                    templeName: Yup.string()
                        .required('Temple Name is required'),
                    name: Yup.string()
                        .required('Temple Admin Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    mobNo: Yup.string()
                        .min(10, 'please enter valid number')
                        .required('Mob No is required'),
                    adharNo: Yup.string()
                        .min(10, 'please enter valid adhar number')
                        .required('Adhar No is required'),
                    address: Yup.string()
                        .required('Address is required'),
                    
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    role: Yup.string()
                        .required('Role is required'),

                })}

                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    TempleService.createTemple(fields).then(res => {
                        this.props.history.push('/');
                    })
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '50px',
                        marginRight: '50px',
                        padding: '0',

                    }}>
                        <h4 className="text-center">Temple SignUp</h4>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="templeName">Temple Name</label>
                                <Field name="templeName" type="text" className={'form-control' + (errors.templeName && touched.templeName ? ' is-invalid' : '')} />
                                <ErrorMessage name="templeName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="address">Address</label>
                                <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                                <ErrorMessage name="address" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="name">Temple Admin Name</label>
                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div class="col">
                                <label htmlFor="adharNo">Adhar No</label>
                                <Field name="adharNo" type="text" className={'form-control' + (errors.adharNo && touched.adharNo ? ' is-invalid' : '')} />
                                <ErrorMessage name="adharNo" component="div" className="invalid-feedback" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="mobNo">Mob No</label>
                                <Field name="mobNo" type="text" className={'form-control' + (errors.mobNo && touched.mobNo ? ' is-invalid' : '')} />
                                <ErrorMessage name="mobNo" component="div" className="invalid-feedback" />
                            </div>

                            <div class="col">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>

                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <Field as="select" name="role" className={'form-control'} >
                                <option value="TempleAdmin">Temple Admin</option>
                            </Field>
                        </div>

                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                            <button type="submit" style={{ marginRight: '20px' }} className="btn btn-primary mr-2">Register</button>
                            <span>
                                <button type="reset" className="btn btn-secondary mr-2">Reset</button>
                            </span>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default CreateTempleComponent;