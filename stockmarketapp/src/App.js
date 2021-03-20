import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home'
import View from './pages/View';
function App() {
  return (
    
       
  <Switch>
    <Route path="/" exact><Home/></Route>
    <Route path="/view" exact><View/></Route>
    <Route ><div>Not Found</div></Route>
  </Switch>
   
  );
}

export default App;
