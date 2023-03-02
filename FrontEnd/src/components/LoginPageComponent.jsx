import React, { Component } from 'react';
import UserService from '../services/UserService';
import  Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import HeaderComponent from './HeaderComponent';

import back2 from '../images/back2.jpg'
import Ram3 from '../images/Ram3.jpg'

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
class LoginPageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
           user:[],   email:'',
            password:'',
            loading: false,
            message: ""
         
            
          
            


        }
   
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
      
    }

    onChangeUsername(e) {
        this.setState({
          email: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
        let user={email:this.state.email,  password:this.state.password}
        console.log('user =>'+JSON.stringify(user));
          UserService.loginUser(user).then(
            res => {    
              
            console.log(res)
           if(res.data.role === 'DEVOTEE'){
            this.props.history.push('/user-activities');
                        localStorage.setItem('res',res)  
           }
                        else{
                          this.props.history.push('/user');
                          localStorage.setItem('res',res)
                        }
          
            },
            error => {
              
    
              this.setState({
                loading: false,
                message: "Invalid Login Details"
              });
            }
          );
        } else {
          this.setState({
            loading: false
          });
        }
       
      }
  
    render() {
      
      
        return (
          <body className="container-fluid"  style={{
            width:'150vw',
            height:'100vh',
            margin:'0',
            overflow:'hidden',
            marginLeft: '0',
            marginRight:'0',
            padding:'0',
            backgroundColor:'GrayText',
          }}>
       <div className="container-fluid"  style={{
       
        
       
        backgroundImage: `url(${Ram3})`,
        backgroundRepeat:'no-repeat',
        backgroundColor: 'lightblue',
        width:'100vw',
        height:'100vh',
        backgroundSize: 'contain',
        backgroundSize: '100% 100%',
      display:'flex',
      padding:'0',
      margin:'0',
    }}>
                
            <div className="col-md-12" >
             
      <p  align="right">
                 <a href="/add-user" class="btn btn-info" role="button">Signup</a></p>
               
            <div class="col-md-4" ></div> 
          
            <div className="card col-md-6 offset-md-3 offset-md-3"  style={{
       
    
      
       backgroundColor: 'transparent',
       background: 
       'rgba(255,255,255,0.3)',
       marginTop:'200px',
     
   }}>
            
             <div className="card-body" >
           
            
             <h2> Login</h2>
            
   
             <Form        className="form-horizontal" 
               onSubmit={this.handleLogin}
               ref={c => {
                 this.form = c;
               }}
             >
               <div className="form-group" 
      >
                 <label  htmlFor="email" >Email</label>
                 <Input 
                  className="form-control transparent-input"
                   type="text"
                   className="form-control"
                   name="email"
                   value={this.state.email}
                   onChange={this.onChangeUsername}
                   validations={[required]}
                 />
               </div>
   
               <div className="form-group">
                 <label htmlFor="password">Password</label>
                 <Input
                   type="password"
                   className="form-control"
                   name="password"
                   value={this.state.password}
                   onChange={this.onChangePassword}
                   validations={[required]}
                 />
               </div>
   
               <div className="form-group">
                 <button
                   className="btn btn-primary btn-block"
                   disabled={this.state.loading}
                 >
                   {this.state.loading && (
                     <span className="spinner-border spinner-border-sm"></span>
                   )}
                   <span>Login</span>
                 </button>
               </div>
   
               {this.state.message && (
                 <div className="form-group">
                   <div className="alert alert-danger" role="alert">
                     {this.state.message}
                   </div>
                 </div>
               )}
               <CheckButton
                 style={{ display: "none" }}
                 ref={c => {
                   this.checkBtn = c;
                 }}
               />
             </Form>
             </div>
           </div>
         </div>
         </div></body>
        );
    }
}

export default LoginPageComponent;