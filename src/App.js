import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Login from './components/Login/Login';
import PageError from './components/PageError/PageError';
import Volunteer from './components/Volunteer/Volunteer';

function App() {
  return (
    <div className="App bg-color">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/volunteer'>
            <Volunteer></Volunteer>
          </Route>
          <Route path='*'>
            <PageError></PageError>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
