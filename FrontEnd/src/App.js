import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEpassComponent from './components/ListEpassComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginPageComponent from './components/LoginPageComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UserActivities from './components/UserActivities';
import BookEpassComponent from './components/BookEpassComponent';
import ShowPassComponent from './components/ShowPassComponent';
import pdf from './components/pdf';
import UpdateUserComponent from './components/UpdateUserComponent';
import DonationComponent from './components/DonationComponent';
import DonationSlipComponent from './components/DonationSlipComponent';
import DonationPdfComponent from './components/DonationPdfComponent';

function App() {
  return (
    <body >
    <div>
      <Router>
         <HeaderComponent />
     
      <div className="container-fluid"  style={{
        
            padding:'0',
           
          }}>
            <switch>
           <Route path="/" exact  component = {LoginPageComponent}></Route>
           <Route path="/user" component = {ListEpassComponent}></Route>
           <Route path="/add-user" component = {CreateUserComponent}></Route>
           <Route path="/user-activities" component = {UserActivities}></Route>
           <Route path="/book-Epass" component = {BookEpassComponent}></Route>
           <Route path="/show-pass" component = {ShowPassComponent}></Route>
           <Route path="/pdf" component={pdf}></Route>
           <Route path="/update/:id" component = {UpdateUserComponent}></Route>
           <Route path="/donation" component = {DonationComponent}></Route>
           <Route path="/donation-details" component = {DonationSlipComponent}></Route>
           <Route path="/donation-pdf" component = {DonationPdfComponent}></Route>
           </switch>
           
    
              
    
        
    </div>
   
 
       
    </Router>
    </div>
    </body>
  );
}

export default App;
