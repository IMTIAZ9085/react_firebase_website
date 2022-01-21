import './App.css';
import Home from './Home';
import {Route,Switch} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Error from './Pages/Error';

function App() {
  return (
    <>
    <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about"  component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/service" component={Service}></Route>
    <Route  component={Error}></Route>
    </Switch>
      
</>
);
}

export default App;
