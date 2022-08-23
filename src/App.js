import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css';

function App() {
  return (
    <div className="container">
        <Header />
        <Hero />
        <div className="cards">
          <Card
            img = '/katie.png'
            rating = '5.0'
            rating_count = '6'
            country = 'USA'
            title = 'Life lessons with Katie Zafere'
            fare = '136'
          />
          <Card
            img = '/bride.png'
            rating = '5.0'
            rating_count = '30'
            country = 'USA'
            title = 'Learn wedding photography'
            fare = '125'
          />
          <Card
            img = '/bike.png'
            rating = '4.8'
            rating_count = '2'
            country = 'USA'
            title = 'Group Mountain Biking'
            fare = '50'
          />
        </div>
    </div>
  );
}

export default App;
