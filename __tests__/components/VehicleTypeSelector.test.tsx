import { fireEvent, render } from '@testing-library/react';
import VehicleTypeSelector from '../../src/components/VehicleTypeSelector';

describe('VehicleTypeSelector', () => {
  const onChangeMock = jest.fn();

  it('should render button with type car', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} />,
    );
    expect(getByText('Carro')).toBeInTheDocument();
  });

  it('should render button with type motorcycle', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} />,
    );
    expect(getByText('Moto')).toBeInTheDocument();
  });

  it('should change the type to car in onChange method', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} />,
    );
    fireEvent.click(getByText('Carro'));
    expect(onChangeMock).toHaveBeenCalledWith('car');
  });

  it('should change the type to motorcycle in onChange method', () => {
    const { getByText } = render(
      <VehicleTypeSelector onChange={onChangeMock} />,
    );
    fireEvent.click(getByText('Moto'));
    expect(onChangeMock).toHaveBeenCalledWith('motorcycle');
  });
});
