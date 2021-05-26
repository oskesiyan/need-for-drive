import './App.css';
import NavState from './context/NavState';
import MainMenu from './components/SideBar/MainMenu';
import StartScreen from './components/StartScreen/StartScreen';


function App() {
  return (
    <NavState>
      <MainMenu />
      <StartScreen/>
    </NavState>
    
  );
}

export default App;
