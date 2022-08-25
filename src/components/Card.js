import star from "../images/star.png"

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return(
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.img} className="person-img" />
      <div className="card-stats">
        <img src={star} className="star" alt="star" />
        <span className="rating">{props.rating}</span>
        <span className="rating-count gray">({props.rating_count}) • </span>
        <span className="location gray">{props.country}</span>
      </div>
      <p className="title">{props.title}</p>
      <p><span className="fare bold">From ${props.fare}</span>/ person</p>
    </div>
  )
}