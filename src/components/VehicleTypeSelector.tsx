type Props = {
  onChange: (type: string) => void;
  value: string;
};
export default function VehicleTypeSelector({ onChange, value }: Props) {
  return (
    <div>
      <button aria-pressed={value === 'car'} onClick={() => onChange('car')}>
        Carro
      </button>
      <button
        aria-pressed={value === 'motorcycle'}
        onClick={() => onChange('motorcycle')}
      >
        Moto
      </button>
    </div>
  );
}
