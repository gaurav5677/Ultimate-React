const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Mobile ", quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ItemList />
      <Status />
    </div>
  );
}

function Logo() {
  return <h1> 🌴🥥 Treavl-List 👜💰</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3> what do you need for your 💸 Trip ? </h3>
    </div>
  );
}

function ItemList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
          // <Item item ={item}  1st is name of component , 2nd  is name of prop and 3rd is object itself
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}

function Status() {
  return (
    <footer className="stats">
      <em> You have X items on your list, And you already packed X (X%) </em>
    </footer>
  );
}
