import { useState } from "react";
import Item from "./Item";

export default function ItemList({
  items,
  onDeleteItems,
  onTggleItem,
  onCleanList,
}) {
  //Immediately destruncted items
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // with slice method we take the capy of array because sorting method is mutating method
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onTggleItem={onTggleItem}
            key={item.id}
          />
          // <Item item ={item}  1st is name of component , 2nd  is name of prop and 3rd is object itself
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by Input Order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by Packed Status</option>
        </select>
        <button onClick={onCleanList}>Clear List</button>
      </div>
    </div>
  );
}
