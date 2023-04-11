import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEpassComponent from './components/ListEpassComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginPageComponent from './components/LoginPageComponent';
import CreateUserComponent from './components/CreateUserComponent';
import CreateTempleComponent from './components/Temple/CreateTempleComponent';
import DevoteeScopeComponent from './components/Devotee/DevoteeScopeComponent';
import TempleScopeComponent from './components/Temple/TempleScopeComponent';
import BookEpassComponent from './components/BookEpassComponent';
import BookPoojaComponent from './components/BookPoojaComponent';
import ShowPassComponent from './components/ShowPassComponent';
import pdf from './components/pdf';
import UpdateUserComponent from './components/UpdateUserComponent';
import CreateTimeSlotComponent from './components/CreateTimeSlotComponent';
import AllSlotComponent from './components/Temple/AllSlotComponent';
import DonationComponent from './components/DonationComponent';
import DonationSlipComponent from './components/DonationSlipComponent';
import DonationPdfComponent from './components/DonationPdfComponent';
import TempleListComponent from './components/Devotee/TempleListComponent';
import DevoteeVerificationComponent from './components/DevoteeVerificationComponent';
import AboutComponent from './components/AboutComponent';
import UpdateComponent from './components/Devotee/UpdateComponent';

function App() {
  return (
    <body >
      <div>
        <Router>
          <HeaderComponent />

          <div className="container-fluid"
               style={{padding: '0'}}>
            <switch>
            
              <Route path="/" exact component={LoginPageComponent}></Route>
              <Route path="/user" component={ListEpassComponent}></Route>
              <Route path="/add-devotee" component={CreateUserComponent}></Route>
              <Route path="/add-temple" component={CreateTempleComponent}></Route>
              <Route path="/devotee-scope" component={DevoteeScopeComponent}></Route>
              <Route path="/temple-scope" component={TempleScopeComponent}></Route>
              <Route path="/book-Epass" component={BookEpassComponent}></Route>
              <Route path="/book-pooja" component={BookPoojaComponent}></Route>
              <Route path="/show-pass" component={ShowPassComponent}></Route>
              <Route path="/pdf" component={pdf}></Route>
              <Route path="/update-user" component={UpdateUserComponent}></Route>
              <Route path="/create-time-slot" component={CreateTimeSlotComponent}></Route>
              <Route path="/all-slot" component={AllSlotComponent}></Route>
              <Route path="/donation" component={DonationComponent}></Route>
              <Route path="/donation-details" component={DonationSlipComponent}></Route>
              <Route path="/donation-pdf" component={DonationPdfComponent}></Route>
              <Route path="/temple-list" component={TempleListComponent}></Route>
              <Route path="/devotee-verification" component={DevoteeVerificationComponent}></Route>
              <Route path="/aboutus" component = {AboutComponent}></Route>
              <Route path="/update" component = {UpdateComponent}></Route>
              

            </switch>

          </div>



        </Router>
      </div>
    </body>
  );
}

export default App;
