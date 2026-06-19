type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
};

export default function TodoList({ todos, onToggle }: Props) {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => onToggle(todo.id)}
            className={todo.completed ? 'completed' : 'incompleted'}
          >
            {todo.text}
          </li>
        ))
      ) : (
        <p>Nenhuma tarefa cadastrada</p>
      )}
    </ul>
  );
}
