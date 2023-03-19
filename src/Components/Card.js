function Card(props){
    return(
        <div className="card">
            <img className="card-pic" src={props.pic} alt=""/>
            <img src={props.stat1} alt=""/>
            <span>{props.stat2}</span>
            <p>{props.activity}</p>
            <p>{props.price}</p>
        </div>       
    )
}

export default Card;