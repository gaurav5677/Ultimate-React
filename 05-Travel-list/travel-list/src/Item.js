export default function Item({ item, onDeleteItems, onTggleItem }) {
  // immediately destruced the item , preventing function error
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onTggleItem(item.id)}
      />
      {/* i want to transform this checkbox in to control element  */}
      {/* control element means that the element has the value define  by state , also has event
            handler , which listen for change and update state accrodingly  */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
