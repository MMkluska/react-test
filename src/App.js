import logo from './logo.svg';
import './App.css';


function App() {

  const myself = {
    firstName : "Mateusz",
    lastName : "Kluska",
    postCode : "E15 4JT",
    city : "London"
  }


  return (
    <div className="App">
    <h3>{myself.firstName}</h3>
    <h3>{myself.lastName}</h3>
    <h3>{myself.city}</h3>
    <h3>{myself.postCode}</h3>
    </div>
  );
}

export default App;
