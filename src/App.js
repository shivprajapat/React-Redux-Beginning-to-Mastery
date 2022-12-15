import logo from './logo.svg';
import './App.css';
import PlusMinusClass from './components/PlusMinusClass';
import PlusMinusFunction from './components/PlusMinusFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

       <section>
       <PlusMinusFunction/>
       {/* <PlusMinusClass/> */}
       </section>
      </header>
    </div>
  );
}

export default App;
