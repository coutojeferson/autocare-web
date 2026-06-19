import { render, screen } from '@testing-library/react';
import VehicleList from '../../src/components/VehicleList';

const vehicles = [
  { id: '1', name: 'Honda Civic', currentKm: 50000 },
  { id: '2', name: 'Toyota Corolla', currentKm: 30000 },
];

describe('VehicleList', () => {
  it('should render all vehicles', () => {
    render(<VehicleList vehicles={vehicles} />);
    expect(screen.getByText('Honda Civic - 50.000 km')).toBeInTheDocument();
    expect(screen.getByText('Toyota Corolla - 30.000 km')).toBeInTheDocument();
  });

  it('should render empty message when no vehicles', () => {
    render(<VehicleList vehicles={[]} />);
    expect(screen.getByText('Nenhum veículo cadastrado')).toBeInTheDocument();
  });

  it('should render vehicles with formatted km', () => {
    render(<VehicleList vehicles={vehicles} />);
    expect(screen.getByText('Honda Civic - 50.000 km')).toBeInTheDocument();
  });
});
