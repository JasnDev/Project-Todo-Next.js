import React from "react";

const ButtonAddTodo = ({onClick}) => {
    return(
        <button onClick={onClick} className="buttonNew">
            Novo Todo.
        </button>
    );
};

export default ButtonAddTodo;