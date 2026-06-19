import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import TodoList from '../../src/components/TodoList';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function TodoWrapper() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Trocar óleo', completed: false },
    { id: '2', text: 'Calibrar pneus', completed: false },
  ]);

  function handleToggle(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return <TodoList todos={todos} onToggle={handleToggle} />;
}

describe('TodoList', () => {
  it('should render all todos', () => {
    render(<TodoWrapper />);
    expect(screen.getByText('Trocar óleo')).toBeInTheDocument();
    expect(screen.getByText('Calibrar pneus')).toBeInTheDocument();
  });

  it('should render empty message when no todos', () => {
    render(<TodoList todos={[]} onToggle={() => {}} />);
    expect(screen.getByText('Nenhuma tarefa cadastrada')).toBeInTheDocument();
  });

  it('should mark todo as completed when clicked', () => {
    render(<TodoWrapper />);
    fireEvent.click(screen.getByText('Trocar óleo'));
    expect(screen.getByText('Trocar óleo')).toHaveClass('completed');
  });

  it('should unmark todo when clicked again', () => {
    render(<TodoWrapper />);
    fireEvent.click(screen.getByText('Trocar óleo'));
    fireEvent.click(screen.getByText('Trocar óleo'));
    expect(screen.getByText('Trocar óleo')).not.toHaveClass('completed');
  });
});
