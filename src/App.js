import './App.css';
import Carre from './components/carre/carre';
import Welcome from './components/welcome/welcome';
import Addition from './components/addition/addition';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Welcome name='Zaza' />
      <Carre />
      <Addition nb1='1' nb2={2} />
    </div>
  );
}

export default App;