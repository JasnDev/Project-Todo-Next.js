import React from "react";

const ButtonAddTodo = ({onClick}) => {
    return(
        <button onClick={onClick}>
            Novo Todo.
        </button>
    );
};

export default ButtonAddTodo;