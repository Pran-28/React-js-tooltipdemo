

export default function TodoCard({todos, handleDeleteTodo, idx, handleEditTodo}) {

    console.warn('idx', idx);

    return (
        <>

            <li className="todosItem">
                {todos}
                <div className="actionsContainer">
                   <button onClick={() => handleEditTodo(idx)}> <i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={() => handleDeleteTodo(idx)}>
                        <i  class="fa-solid fa-trash"></i>
                    </button>
                </div>

            </li>
        
        </>
    );
}

