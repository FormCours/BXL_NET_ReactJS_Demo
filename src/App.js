import './App.css';
import Carre from './components/carre/carre';
import Welcome from './components/welcome/welcome';
import Addition from './components/addition/addition';
import PeopleTab from './components/people-tab/people-tab';

function App() {

  // Création du liste hardcodé
  // (Par la suite, on utilise une tableau dans le state ou la consomation d'un API)
  const people = [
    {id:0, firstname: 'Riri', lastname: 'Duck'},
    {id:1, firstname: 'Fifi', lastname: 'Duck'},
    {id:2, firstname: 'Zaza', lastname: 'Vanderquack'},
    {id:3, firstname: 'Balthazar', lastname: 'Picsou'},
    {id:4, firstname: 'Della', lastname: 'Duck'},
    {id:5, firstname: 'Archibald', lastname: 'Gripsou'},
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Welcome name='Zaza' />
      <Carre />
      <Addition nb1={1} nb2={2} />

      <h2>Liste de personne</h2>
      <PeopleTab peopleList={people} />
    </div>
  );
}

export default App;