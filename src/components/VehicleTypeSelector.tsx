type Props = {
  onChange: (type: string) => void;
};
export default function VehicleTypeSelector({ onChange }: Props) {
  return (
    <div>
      <button onClick={() => onChange('car')}>Carro</button>
      <button onClick={() => onChange('motorcycle')}>Moto</button>
    </div>
  );
}
