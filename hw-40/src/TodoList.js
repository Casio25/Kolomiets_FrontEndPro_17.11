import {TodoItem} from "./TodoItem.js"
export function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(item => <TodoItem key={item.id} {...item} />)}
        </ul>
    )
}