import star from "../images/star.png"

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE"
  }
  return(
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.card.coverImg} className="person-img" />
      <div className="card-stats">
        <img src={star} className="star" alt="star" />
        <span className="rating">{props.card.stats.rating}</span>
        <span className="rating-count gray">({props.card.stats.reviewCount}) • </span>
        <span className="location gray">{props.card.location}</span>
      </div>
      <p className="title">{props.card.title}</p>
      <p><span className="fare bold">From ${props.card.price}</span>/ person</p>
    </div>
  )
}