import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar';
import PastryContainer from './PastryContainer';
import ReviewForm from './ReviewForm';
import About from './About'
//import ClickMe from './ClickMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
      <Switch>
        <Route exact path= "/pastries">
          <PastryContainer storeName='Vics Pastries'/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route> 

        <Route exact path="/reviews">
          <ReviewForm/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}
export default App;