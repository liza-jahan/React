import logo from './logo.svg';
import './App.css';
import TopNav from './componants/TopNav';
import Featured from './componants/Featured';
import Delivery from './componants/Delivery';
import TopPicks from './componants/TopPicks';
import Meal from './componants/Meal';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
    </div>
  );
}

export default App;
