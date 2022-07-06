import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar';
import PastryContainer from './PastryContainer';
import ReviewForm from './ReviewForm';
import About from './About'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Switch>
        <Route path= "/pastries">
          <PastryContainer storeName='Vic Pastries'/>
        </Route>

        <Route path="/about">
          <About/>
        </Route> 

        <Route path="/reviews">
          <ReviewForm/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}
export default App;