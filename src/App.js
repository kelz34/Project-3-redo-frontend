import './App.css';
import Main from './components /Main';
import Nav from './components /nav';
import Days from './pages /Days';

const App = (props) => {
  // display the quotes
  
  
  return (
    <div className="App">

       <Nav />      
       <Days /> 
       <Main />
    </div>
  );
}

export default App;
