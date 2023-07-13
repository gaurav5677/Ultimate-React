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
  return <div className="list">List</div>;
}

function Status() {
  return (
    <footer className="stats">
      <em> You have X items on your list, And you already packed X (X%) </em>
    </footer>
  );
}
