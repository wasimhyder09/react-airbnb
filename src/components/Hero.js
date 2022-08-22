import hero from '../images/hero-airbnb.png';

export default function Hero() {
  return(
    <section className="hero">
      <img src={hero} className="hero" alt="hero" />
      <h1 className="header">Online Experiences</h1>
      <p className="text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}