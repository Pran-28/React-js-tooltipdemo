import TodoCard from "./todoCard";


const TodoList = ({todos, handleDeleteTodo, handleEditTodo}) => {
    return (
        <>

            <div className="main">
                {todos.map((arr, idx) => {
                    return (
                       <TodoCard handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} key={idx} todos={arr} idx={idx}/>
                    );
                })}
            </div>
        
        </>
    );
}

export default TodoList;