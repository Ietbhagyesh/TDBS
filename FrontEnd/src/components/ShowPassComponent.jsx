import React, { Component, useRef } from 'react';
import EpassService from '../services/EpassService';

import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";


class ShowPassComponent extends React.Component {

  
        constructor(props) {
            super(props)
            this.state = {
             
                epass:{},
                userd:{}
   
            }
     
        }
       
    

        logout = () => {
            localStorage.clear();
            window.location.href = "/";
          }
        
componentDidMount(){
            const userData=localStorage.getItem('pass');
            const UserDate=JSON.parse(userData);
           
                 let UserId=UserDate.passId;
               
                const user=localStorage.getItem('user');
                const userDetails=JSON.parse(user);
                console.log(userDetails);
                this.setState({userd:userDetails})
           EpassService.getPassById(UserId).then(res=>{
               this.setState({epass:res.data})
              let id= res.data.passId;

          

           

           })

           
        }

     
    render() {

   
       
     

        return (
     
     <body>
            <div   style={{
        backgroundColor: '#EBF4FA',
       
      }}  >
            
          
               
                <div className="card col-md-6 offset-md-3" style={{
        backgroundColor: '#FFF8C6',
       
      }} >

                    <h3 className="text-center">Darshan Access Card</h3>
                    <div className="card-body">
                    <div className="row">
                            <label class="font-weight-bold" >Devotee Name:</label>
                            <div  className="form-control">{ this.state.userd.name}</div>
                           
                        </div>
                        <div className="row" >
                            <label class="font-weight-bold">Pass Id:</label>
                            <div className="form-control">{ this.state.epass.passId }</div>

                        </div>
                        <div className="row">
                            <label class="font-weight-bold">Pass Date:</label>
                            <div  className="form-control">{ this.state.epass.passDate }</div>

                        </div>
                        <div className="row">
                            <label class="font-weight-bold" >Time Slot:</label>
                            <div  className="form-control">{ this.state.epass.slot }</div>

                        </div>
                        <div className="row">
                            <label class="font-weight-bold" >No Of Peoples:</label>
                            <div  className="form-control">{ this.state.epass.peoples}</div>
                           
                        </div>
                        
                        
                        <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>
<p class="text-primary">1.please download this pass and carry Hard Copy of epass</p>
<p class="text-primary">2.This Darshan Pass must be shown at verification counter</p>
<p class="text-primary">3.online Donation service is avaailable on our website</p>
<p class="text-primary">4.Consumption of Alcohol are strictly prohibited</p>
<p class="text-primary">5.For any asistance please contact the temle trust Authorities</p>
                    </div>

                </div>
            </div>
            
         	
 

            </body>
           
        );
    }
}

 



export default ShowPassComponent;