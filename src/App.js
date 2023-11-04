import './App.css';
import Main from './components /Main';
import Nav from './components /nav';
import Dailylogs from './pages /Dailylogs';
import Days from './pages /Days';

const App = (props) => {
  // display the quotes
  
  
  return (
    <div className="App">

       <Nav />      
       {/* <Days />  */}
       {/* <Dailylogs /> */}
       <Main />
    </div>
  );
}

export default App;
