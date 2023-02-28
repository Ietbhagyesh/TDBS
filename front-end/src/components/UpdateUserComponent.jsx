import React, { Component } from 'react';
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.match.params.id,
            name:'',
            email:'',
            password:'',
            mobNo:'',
            adharNo:'',
            address:'',
           
          
            

          

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePassHandler=this.changePassHandler.bind(this);
        this.changeMobnoHandler=this.changeMobnoHandler.bind(this);
        this.changeAdharnoHandler=this.changeAdharnoHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.updateUser=this.updateUser.bind(this);
      
      
    }

   componentDidMount(){
       UserService.getUserById(this.state.id).then( (res)=>{
           let user=res.data;
           this.setState({name:user.name,
        email:user.email,
    password:user.password,
        mobNo:user.mobNo,
        adharNo:user.adharNo,
            address:user.adharNo})
       })
   }









    updateUser = (e) => {
       
       
        e.preventDefault();
     
       

        let user= {name: this.state.name,email: this.state.email, password: this.state.password, mobNo: this.state.mobNo, adharNo: this.state.adharNo, address: this.state.address}
        console.log('user =>'+JSON.stringify(user));
     
        
UserService.updateUser(user,this.state.id).then(res=>{
    console.log(res);
    this.props.history.push('/');
})
      
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
    changeAdharnoHandler=(event) =>{
        this.setState({adharNo: event.target.value})
    }
    changeAddressHandler=(event) =>{
        this.setState({address: event.target.value})
    }
   
    cancel(){
        this.props.history.push('/');
    }



  
    
     
    








   
 
    render() {
        
     
        return (
            <div>
 
<div className="container">
              
                    <div className="row">
                       
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Profile </h3>
                                <div className="card-body">
                             
                                    <form>
                                        
                                        <div  className="form-group">
                                          <label>Username</label> 
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
                                            <label>Adhar No</label>
                                            <input id="div5" type ="number" name="adharNo" className="form-control"
                                            value={this.state.adharNo} onChange={this.changeAdharnoHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input id="div6"  name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateUser}>Submit</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>cancel</button>
                                        
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
