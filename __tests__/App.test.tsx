import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.getByText('AutoCare')).toBeInTheDocument();
  });
});
