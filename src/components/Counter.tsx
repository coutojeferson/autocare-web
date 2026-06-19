type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function Counter({ count, onIncrement, onDecrement }: Props) {
  function handleDecrement() {
    if (count === 0) return;
    onDecrement();
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
