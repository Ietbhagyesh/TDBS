import React, { Component } from 'react';
import UserService from '../services/UserService';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.match.params.id,

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePassHandler=this.changePassHandler.bind(this);
        this.changeMobnoHandler=this.changeMobnoHandler.bind(this);
        
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.updateUser=this.updateUser.bind(this);
      
      
    }
    logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }

   componentDidMount(){
    const userData=window.localStorage.getItem('user');
        const response=JSON.parse(userData);
        console.log('In Update Scope user =>' + response.name);

        this.state.id = response.id;
    this.state.name = response.name;
      this.state.email = response.email;
      this.state.password = response.password;
      this.state.mobNo = response.mobNo;
      this.state.address = response.address;
    
       
   }

    updateUser = (e) => {
       
        e.preventDefault();
     
        let user= {name: this.state.name,email: this.state.email, password: this.state.password, mobNo: this.state.mobNo, address: this.state.address}
        console.log('user =>'+JSON.stringify(user));
     
        
UserService.updateUser(user,this.state.id).then(res=>{
    console.log(res);
    this.props.history.push('/');
})
      
    }
    changeIdHandler=(event) =>{
        this.setState({id: event.target.value})
        
    }
    changeNameHandler=(event) => {
        
        this.setState({name: event.target.value})
    }
    changeEmailHandler=(event) =>{
        this.setState({email: event.target.value})
    }
    changePassHandler=(event) => {
        this.setState({password: event.target.value})
    }
    changeMobnoHandler=(event) =>{
        this.setState({mobNo: event.target.value})
    }
    
    changeAddressHandler=(event) =>{
        this.setState({address: event.target.value})
    }
   
    cancel(){
        this.props.history.push('/');
    }



    render() {

        const userData=window.localStorage.getItem('user');
        const response=JSON.parse(userData);
        console.log('In Update Scope user =>' + response.name);
    
        
     
        return (
            <div>
 
<div className="container">
              
                    <div className="row">
                       
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Profile </h3>
                                <div className="card-body">
                                <p align="right" >
                                            <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>
                             
                                    <form>
                                    validationSchema={Yup.object().shape({
                    
                    name: Yup.string()
                        .required('Temple Admin Name is required'),
                    })}

                                    <div  className="form-group">
                                          <label>User Id : {response.id}</label> 
                                            <input  id="div1"  name="name" className="form-control"
                                            value={response.id} onChange={this.changeNameHandler}/>
                                        </div>
                                    
                                        <div  className="form-group">
                                          <label>Username : {response.name}</label> 
                                            <input  id="div1"  name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                      
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input id="div2"  name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>password</label>
                                            <input id="div3"  type="password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePassHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Mob No</label>
                                            <input  id="div4"  type ="number"  name="mobNo" className="form-control"
                                            value={this.state.mobNo} onChange={this.changeMobnoHandler}/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input id="div6"  name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div >
                                        <button className="btn btn-success" style={{ marginRight: '20px', marginTop: '12px' }} onClick={this.updateUser}>Submit</button>
                                        <button className="btn btn-danger" style={{ marginRight: '20px', marginTop: '12px' }} onClick={this.cancel.bind(this)} >cancel</button>
                                        
                                    </form>
                            
                                </div>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default UpdateUserComponent;
