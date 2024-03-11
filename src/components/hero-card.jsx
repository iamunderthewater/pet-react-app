import './card.css'

export default function Card({imgUrl,caption}) {
    return(
        <div className="hero-card">
            <div>
                <img src={imgUrl} alt="" />
            </div>
            <div>
                <span>{caption}</span>
            </div>
        </div>
    )
}