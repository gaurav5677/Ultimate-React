import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); //used lift up state technique
  // why i did this  :  the data from Itemlist can not pass to the form Component ,{In React we can't send data in upward tree}
  // thats why I put this state here  which is  the closest common parent component

  // LIft up state :- whenever  multiple sibling components need access to the same state , we
  //  nomve that state up to the first common parent component
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    // we need a new arrya after the item has been deleted . so this new arrya will be based on current one
    // so i put a call back function which will receive current item as its input
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />{" "}
      {/* calling onAddItems for better conventions */}
      <ItemList
        items={items}
        onDeleteItems={handleDeleteItems}
        onTggleItem={handleToggleItem}
      />
      <Status items={items} />
    </div>
  );
}

function Logo() {
  return <h1> 🌴🥥 Treavl-List 👜💰</h1>;
}

function Form({ onAddItems }) {
  // destructed the props
  //piece of State
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // this function will receive a  new item object which wil then add to the Arrya list

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    // console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need for your 💸 Trip ? </h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function ItemList({ items, onDeleteItems, onTggleItem }) {
  //Immediately destruncted items
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onTggleItem={onTggleItem}
            key={item.id}
          />
          // <Item item ={item}  1st is name of component , 2nd  is name of prop and 3rd is object itself
        ))}
      </ul>
      <div className="action">
        <select>
          <option value="input"> Sort by Input Order</option>
          <option value="description"> Sort by description</option>
          <option value="Packed"> Sort by Packed Status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItems, onTggleItem }) {
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

function Status({ items }) {
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
