export function TodoItem({ title, id, completed }) {
    return (
        <li className="todo">
            <label>
                <input
                    type="checkbox"
                    defaultChecked={false}
                />
                <span>{title}</span>

            </label>
        </li>
    )
}