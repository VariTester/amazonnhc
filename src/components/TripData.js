import "./TripStyles.css"

function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                {/* <img src={props.image} alt="image"/> */}
                {/* <iframe width="560" height="315" src={props.image} alt='image' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <iframe src={props.image} alt='image'></iframe>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default TripData