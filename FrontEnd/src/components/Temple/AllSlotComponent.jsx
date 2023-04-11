import React, { Component } from 'react';
import UserService from '../../services/UserService';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import EpassService from '../../services/EpassService';

import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}


class AllSlotComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       

    }
  }

  componentDidMount() {
    


  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  book(slotId){
    this.props.history.push(`/book-Epass/${slotId}`);
}
  

  render() {

    const slotData = window.localStorage.getItem('slotbytemple');
    const data = JSON.parse(slotData);
    const userData=window.localStorage.getItem('user');
    const response=JSON.parse(userData);
   
   

    const tableRows = data.map(
      (element) => {

        return (
          <tr>
            <td>{element.slotId}</td>
            <td>{element.slotDate}</td>
            <td>{element.slot1}</td>
            <td>{element.availableSlot1}</td>
            
            {response.role === 'Devotee' ?
              <p align="right" >
                <button style={{ marginRight: '100px' }} onClick={() => this.book(element.slotId)} className="btn btn-primary">Book</button></p>
  
              : ''}
            


            <td>{element.slot2}</td>
            <td>{element.availableSlot2}</td>
            {response.role === 'Devotee' ?
              <p align="right" >
                <button style={{ marginRight: '100px' }} onClick={() => this.book()} className="btn btn-primary">Book</button></p>
              : ''}
            <td>{element.slot3}</td>
            <td>{element.availableSlot3}</td>
            {response.role === 'Devotee' ?
              <p align="right" >
                <button style={{ marginRight: '100px' }} onClick={() => this.book()} className="btn btn-primary">Book</button></p>
              : ''}
            <td>{element.slot4}</td>
            <td>{element.availableSlot4}</td>

            {response.role === 'Devotee' ?
              <p align="right" >
                <button style={{ marginRight: '100px' }} onClick={() => this.book()} className="btn btn-primary">Book</button></p>
              : ''}

          </tr>
          
        )
      }
    )


        

    return (

      

      <div>
        <h3 className="text-center">All Slot List</h3>
        <p align="right" >
          <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>

        <Table hover>
          <thead>
            <tr>
              <th>Slot ID</th>
              <th>Date</th>
              <th>Slot1</th>
              <th>Available</th>
              {response.role === 'Devotee' ? <th></th> : '' }
              
              <th>Slot2</th>
              <th>Available</th>
              {response.role === 'Devotee' ? <th></th> : '' }
              <th>Slot3</th>
              <th>Available</th>
              {response.role === 'Devotee' ? <th></th> : '' }
              <th>Slot4</th>
              <th>Available</th>
              {response.role === 'Devotee' ? <th></th> : '' }
            </tr>
          </thead>
          <tbody>
            {tableRows}
            
          </tbody>
        </Table>




</div>

    )

  }
}
export default AllSlotComponent;