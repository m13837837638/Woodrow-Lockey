export default function Counter({
  value,
  id,
  onChange,
  onIncrement,
  onDecrement
}) {
  const _onIncrement = (val, id) => {
    if (val === 0) return;
    val--;
    if (onIncrement) onIncrement(val, id);
    if (onChange) onChange(val, id);
  };
  const _onDecrement = (val, id) => {
    val++;
    if (onDecrement) onDecrement(val, id);
    if (onChange) onChange(val, id);
  };
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          className="button is-danger is-small"
          onClick={() => {
            _onIncrement(value, id);
          }}
        >
          -
        </button>
        <button
          className="button is-success is-small"
          onClick={() => {
            _onDecrement(value, id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
