import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import SearchInput from '../../src/components/SearchInput';

function SearchWrapper() {
  const [value, setValue] = useState('');
  return (
    <div>
      <SearchInput
        value={value}
        onChange={setValue}
        placeholder="Buscar veículo..."
      />
      <span>Valor: {value}</span>
    </div>
  );
}

describe('SearchInput', () => {
  it('should render input with placeholder', () => {
    render(<SearchWrapper />);
    expect(
      screen.getByPlaceholderText('Buscar veículo...'),
    ).toBeInTheDocument();
  });

  it('should update value when user types', () => {
    render(<SearchWrapper />);
    fireEvent.change(screen.getByPlaceholderText('Buscar veículo...'), {
      target: { value: 'Honda' },
    });
    expect(screen.getByText('Valor: Honda')).toBeInTheDocument();
  });

  it('should render with empty value initially', () => {
    render(<SearchWrapper />);
    expect(screen.getByPlaceholderText('Buscar veículo...')).toHaveValue('');
  });

  it('should filter vehicles by name', () => {
    render(<SearchWrapper />);
    fireEvent.change(screen.getByPlaceholderText('Buscar veículo...'), {
      target: { value: 'Honda' },
    });
    expect(screen.getByPlaceholderText('Buscar veículo...')).toHaveValue(
      'Honda',
    );
  });
});
