export default function Status({ items }) {
  if (!items.length)
    return (
      <em>
        <p className="stats">Start Adding some Items in your packing list</p>
      </em>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are all Set ! Happy Journey"
          : ` You have X ${numItem} on your list, And you already packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
