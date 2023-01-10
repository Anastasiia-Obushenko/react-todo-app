import React from 'react';
// import components
import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;




