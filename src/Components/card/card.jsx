import React from "react";
import './card.css'

export const Card = (props) => {
    const [num, edit] = React.useState(0)
    return (
        <div className="card">
            <img src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <h1>{num}</h1>
            <button onClick={()=> edit(num + 1)}>Count</button>
        </div>
    )
}
