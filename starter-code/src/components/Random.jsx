import React from 'react'

export default props => {
    return (
        <div>
             Random value between {props.max} and {props.min} =>{" "}
            {Math.floor(Math.random() * (props.max - props.min) + props.min)}
        </div>
    )
}
