import React, { Component } from 'react';
import UserService from '../../services/UserService';
import TempleService from '../../services/TempleService';


import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class UpdateComponent extends Component {
    
    render() {
        const userData=window.localStorage.getItem('user');
        const response=JSON.parse(userData);
        console.log('In Update Scope user =>' + response.role);
        return (
            <Formik
                initialValues={{
                    
                    templeName : response.templeName,
                    name : response.name,
                    email : response.email,
                    mobNo :response.mobNo,
                    adharNo : response.adharNo,
                    address : response.address,
                    password : response.password,
                    role : response.role,
                    
                   
                   
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('First Name is required'),
                  
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),

                      mobNo: Yup.string()
                      .min(10,'please enter valid number')
                        .required('Mob No is required'),

                        adharNo: Yup.string()
                        .min(10,'please enter valid adhar number')
                        .required('Adhar No is required'),

                        address: Yup.string()
                        .required('Address is required'),

                        role: Yup.string()
                        .required('Role is required'),
        
                            peoples: Yup.number()
                                .required('This field is required')
                                .positive('please Enter valid Number')
                                .lessThan(100, 'please select Number of peoples between 1 to 100'),
        
                        
                    
                })}

                onSubmit={fields => {

                    console.log('Update button clicked')
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))


                    if(response.role === 'TempleAdmin'){
                        TempleService.updateTemple(fields,response.templeId).then(res=>{
                            console.log(res);
                            this.props.history.push('/temple-scope');
                        })

                    }
                    else{
                        UserService.updateUser(fields,response.id).then(res=>{
                            console.log(res);
                            this.props.history.push('/devotee-scope');
                        })

                    }
  
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{
                       
                        marginTop:'40px',
                        overflow:'hidden',
                        marginLeft: '300px',
                        marginRight:'300px',
                        padding:'0',
                       
                      }}>
                        <h3 className="text-center">Update</h3>
                        {response.role === 'TempleAdmin' ? 
                            <div className="form-group">
                                 <label htmlFor="Templename">Temple Name</label>
                                <Field name="templeName" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="templeName" component="div" className="invalid-feedback" />
                            </div>: ''}
                        <div className="form-group">
                        {response.role === 'TempleAdmin' ? <label htmlFor="name">Temple Admin Name</label> : <label htmlFor="name">Name</label> }
                            
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobNo">Mob No</label>
                            <Field name="mobNo" type="number" className={'form-control' + (errors.mobNo && touched.mobNo ? ' is-invalid' : '')} />
                            <ErrorMessage name="mobNo" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="adharNo">Adhar No</label>
                            <Field name="adharNo" type="number" className={'form-control' + (errors.adharNo && touched.adharNo ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="adharNo" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>



                        <div className="form-group">
                            <label htmlFor="role">Role</label> 
                            <Field   as="select" name = "role" className={'form-control'} readOnly >
                                <option value = "role" selected>{response.role === 'TempleAdmin' ? 'TempleAdmin' : 'Devotee'}</option>
                            </Field>
                        </div>

                        <div className="form-group">
                            <button type="submit"  style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Update</button>
                            <span><button type="reset" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-secondary">Reset</button></span>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default UpdateComponent;