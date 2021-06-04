import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavState from './context/NavState';
import MainMenu from './components/SideBar/MainMenu';
import StartScreen from './components/StartScreen/StartScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OrderPage from './components/OrderPage/OrderPage';


function App() {
  return (
    <Router>    
      <NavState>
        <MainMenu />
        <Header/>
        <Footer/>
        <Switch>
          <Route path='/' component={StartScreen} exact/>          
          <Route path='/order' component={OrderPage}/>
        </Switch>
      </NavState>    
    </Router>
  );
}

export default App;
