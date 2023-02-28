import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

           

        }
    }
   
    render() {
        return (
            <div class="container-fluid" style={{
             
                margin:'0',
                overflow:'hidden',
                marginLeft: '0px',
                padding:'0',
                backgroundColor:'GrayText',
              }} >
            
               
                
                    <nav className="navbar navbar-expand-x1 navbar-dark bg-dark">
                    <div className="navbar-brand"> Temple Management System</div>
                  
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
      
        </li>
        </ul> 
                    </nav> 
                    
              
               
            </div>
            
        );
    }
}

export default HeaderComponent;