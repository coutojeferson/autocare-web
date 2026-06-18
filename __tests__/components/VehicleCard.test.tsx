import { render, screen } from '@testing-library/react';
import VehicleCard from '../../src/components/VehicleCard';

describe('VehicleCard', () => {
  it('should render vehicle name', () => {
    render(<VehicleCard name="Honda Civic" currentKm={50000} />);
    expect(screen.getByText('Honda Civic')).toBeInTheDocument();
  });

  it('should render current km', () => {
    render(<VehicleCard name="Honda Civic" currentKm={50000} />);
    expect(screen.getByText('50.000 km')).toBeInTheDocument();
  });
});
