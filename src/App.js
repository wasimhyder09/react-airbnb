import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./Data"
import './App.css';

function App() {
  const CardElements = cardData.map(card => {
    return <Card
            key = {card.id}
            card = {card}
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
