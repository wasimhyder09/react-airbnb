import star from "../images/star.png"

export default function Card() {
  return(
    <div className="card">
      <img src="/katie.png" className="person-img" alt="Katie" />
      <div className="card-stats">
        <img src={star} className="star" alt="star" />
        <span className="rating">5.0</span>
        <span className="rating-count gray">(6) • </span>
        <span className="location gray">USA</span>
      </div>
      <p className="title">Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span>/ person</p>
    </div>
  )
}