import './App.css';


function App() {

  const myself = {
    firstName : "Mateusz",
    lastName : "Kluska",
  }


  return (
    <div className="App">
    <h3>{myself.firstName}</h3>
    <h3>{myself.lastName}</h3>
    </div>
  );
}

export default App;
