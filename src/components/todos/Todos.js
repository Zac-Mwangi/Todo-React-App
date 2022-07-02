import React from "react";
import './Todos.css'

const Todos = (props) => {
    console.log(props.todos)
    return(
        <div className="todo">
            {props.todos.map((todo)=> <p>{todo}</p>)}
        </div>
    )
}

export default Todos;

