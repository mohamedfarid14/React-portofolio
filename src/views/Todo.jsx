import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { addTodo, deleteTodo } from "../redux";

function Todo() {
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    const addTodoItem = (task) => {
        dispatch(addTodo(task));
    }

    const deleteTodoItem = (index) => {
        dispatch(deleteTodo(index))
    }

    return (
        <div className="text-center py-2 todo-wrapper container mb-2">
            <TodoForm addTodo={addTodoItem}/>
            <TodoList todos={todos} deleteTodo={deleteTodoItem}/>
        </div>
    )
}

export default Todo