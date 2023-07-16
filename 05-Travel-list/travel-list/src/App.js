import { useState } from "react";
import Logo from "./Logo";
import Form from "./form";
import ItemList from "./ItemList";
import Status from "./Status";

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

  function handleClearItem() {
    const confermed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confermed) setItems([]);
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
        onCleanList={handleClearItem}
      />
      <Status items={items} />
    </div>
  );
}
