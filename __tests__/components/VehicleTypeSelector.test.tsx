import { fireEvent, render } from '@testing-library/react';
import VehicleTypeSelector from '../../src/components/VehicleTypeSelector';

describe('VehicleTypeSelector', () => {
  const onChangeMock = jest.fn();

  it('should render button with type car', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} value="car" />,
    );
    expect(getByText('Carro')).toBeInTheDocument();
  });

  it('should render button with type motorcycle', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} value="motorcycle" />,
    );
    expect(getByText('Moto')).toBeInTheDocument();
  });

  it('should change the type to car in onChange method', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} value="car" />,
    );
    fireEvent.click(getByText('Carro'));
    expect(onChangeMock).toHaveBeenCalledWith('car');
  });

  it('should return Carro in the value when this option has selected', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} value="car" />,
    );
    expect(getByText('Carro').closest('button')).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('should change the type to motorcycle in onChange method', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} value="motorcycle" />,
    );
    fireEvent.click(getByText('Moto'));
    expect(onChangeMock).toHaveBeenCalledWith('motorcycle');
  });

  it('should return Moto in the value when this option has selected', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} value="motorcycle" />,
    );
    expect(getByText('Moto').closest('button')).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});
