// import { useState } from "react";

export default function TodoInput({handleAddTodo, todoValue, setTodovalue}) {

    // const [todoValue, setTodoValue] = useState("");
    

    return (
        <>

            <div className="headers">
                <input
                    className="customInput"
                    type="text"
                    value={todoValue}
                    onChange={(e)=> {
                        setTodovalue(e.target.value);
                    }}
                    placeholder="Enter Todo"/>
                <button onClick={() => {handleAddTodo(todoValue)
                    setTodovalue('');
                }} className="customButton">Add</button>
            </div>

        
        </>
    );
}

