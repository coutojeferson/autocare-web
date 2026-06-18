import { fireEvent, render } from '@testing-library/react';
import AddVehicleButton from '../../src/components/AddVehicleButton';

describe('AddVehicleeButton', () => {
  const onClickMock = jest.fn();
  it('should rende button', () => {
    const { getByText } = render(<AddVehicleButton onClick={onClickMock} />);
    expect(getByText('+')).toBeInTheDocument();
  });

  it('should handle click', () => {
    const { getByText } = render(<AddVehicleButton onClick={onClickMock} />);
    fireEvent.click(getByText('+'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
