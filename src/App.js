import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./Data"
import './App.css';

function App() {
  const CardElements = cardData.map(card => {
    return <Card
            img = {card.coverImg}
            rating = {card.stats.rating}
            rating_count = {card.stats.reviewCount}
            country = {card.location}
            title = {card.title}
            fare = {card.price}
          />
  })
  return (
    <div className="container">
        <Header />
        <Hero />
        <div className="cards">
          {CardElements}
        </div>
    </div>
  );
}

export default App;
