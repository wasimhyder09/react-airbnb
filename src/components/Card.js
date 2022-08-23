import star from "../images/star.png"

export default function Card(props) {
  return(
    <div className="card">
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