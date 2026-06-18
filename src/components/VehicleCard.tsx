import formatKm from '../utils/formatKm';

type Props = {
  name: string;
  currentKm: number;
};
export default function VehicleCard({ name, currentKm }: Props) {
  return (
    <div>
      <span>{name} </span>
      <span>{formatKm(currentKm)}</span>
    </div>
  );
}
