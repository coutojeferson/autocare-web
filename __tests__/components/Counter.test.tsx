import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import Counter from '../../src/components/Counter';

function CounterWrapper() {
  const [count, setCount] = useState(0);
  return (
    <Counter
      count={count}
      onIncrement={() => setCount(count + 1)}
      onDecrement={() => setCount(count - 1)}
    />
  );
}

describe('Counter', () => {
  it('should render initial count as 0', () => {
    render(<CounterWrapper />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should increment count when + is clicked', () => {
    render(<CounterWrapper />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should decrement count when - is clicked', () => {
    render(<CounterWrapper />);
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should not go below 0', () => {
    render(<CounterWrapper />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
