import logo from './logo.svg';
import './App.css';
import TopNav from './componants/TopNav';
import Featured from './componants/Featured';
import Delivery from './componants/Delivery';
import TopPicks from './componants/TopPicks';
import Meal from './componants/Meal';
import Categories from './componants/Categories';
import NewsLetter from './componants/NewsLetter';
import Footer from './componants/footer';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default App;
