import logo from '../images/airbnb-logo.png';

export default function Header() {
  return(
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
    </div>
  )
}