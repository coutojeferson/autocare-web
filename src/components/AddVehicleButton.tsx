type Props = {
  onClick: () => void;
};
export default function AddVehicleButton({ onClick }: Props) {
  return <button onClick={onClick}>+</button>;
}
