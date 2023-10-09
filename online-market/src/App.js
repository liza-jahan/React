import logo from './logo.svg';
import './App.css';
import TopNav from './componants/TopNav';
import Featured from './componants/Featured';
import Delivery from './componants/Delivery';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
    </div>
  );
}

export default App;
