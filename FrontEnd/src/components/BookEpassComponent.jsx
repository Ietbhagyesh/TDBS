import React, { Component ,useState } from 'react';
import emailjs from 'emailjs-com';

import EpassService from '../services/EpassService';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserService from '../services/UserService';
 
import { parse, isDate } from "date-fns";
const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}
class BookEpassComponent extends Component {
  
  
    render() {
        return (
            <Formik
                initialValues={{
                    passDate:'',
                    peoples:'',
                    slot:'',
                  
                   
                   
                }}
                
                validationSchema={Yup.object().shape({
                    passDate: Yup.date().transform(parseDateString).min(today,'please select valid date'),

                  
                        peoples: Yup.number()
                       .required('This field is required')
                       .positive('please Enter valid Number')
                       .lessThan(5,'please select Number of peoples between 1 to 5'),

                        slot: Yup.string()
                        .required('ereq'),
                      
                       

                    
                })}
              
                onSubmit={userData => {
                    emailjs.sendForm('service_flv5uiq', 'template_u56edpm', '.abc', 'user_rwUGjMuz6UWCDzpwVVGPe')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                  
                          alert('Booking successfull :-)\n\n' + JSON.stringify(userData, null, 4))
                    EpassService.createEpass(userData).then(res =>{

                      
                        this.props.history.push('/pdf');
                     
                     
                    })
                   
                }}
              
                render={({ errors, status, touched }) => (
                    <Form  className="abc"style={{
                       
                        marginTop:'100px',
                        overflow:'hidden',
                        marginLeft: '250px',
                        marginRight:'250px',
                        padding:'0',
                       
                      }}>
                        <div className="form-group">
                            <label htmlFor="passDate">First Name</label>
                            <Field name="passDate" type="date" className={'form-control' + (errors.passDate && touched.passDate ? ' is-invalid' : '')} />
                            <ErrorMessage name="passDate" component="div" className="invalid-feedback" />
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="peoples">Number Of Peoples</label>
                            <Field name="peoples" type="number" className={'form-control' + (errors.peoples && touched.peoples     ? ' is-invalid' : '')} />
                            <ErrorMessage name="peoples" component="div" className="invalid-feedback" />
                        </div>
                     <div className="form-group">
                     <label htmlFor="slot"> slot</label>
                                         
                                            
                                            
                                            <Field   as="select" name = "slot" className={'form-control'} >
                                                <option value = "8AM-9AM" selected>8AM-9AM</option>
                                                <option value = "9AM-10AM">9AM-10AM</option>
                                                <option value = "9AM-10AM">9AM-10AM</option>
                                               
                                           
                                          </Field>
                                                </div>                   
                     
                       
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Book Epass</button>
                          
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default BookEpassComponent;