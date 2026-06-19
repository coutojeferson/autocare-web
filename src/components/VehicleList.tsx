import formatKm from '../utils/formatKm';

type Vehicle = {
  id: string;
  name: string;
  currentKm: number;
};

type Props = {
  vehicles: Vehicle[];
};

export default function VehicleList({ vehicles }: Props) {
  return (
    <ul>
      {vehicles.length > 0 ? (
        vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.name} - {formatKm(vehicle.currentKm)}
          </li>
        ))
      ) : (
        <p>Nenhum veículo cadastrado</p>
      )}
    </ul>
  );
}
