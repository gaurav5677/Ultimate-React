import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      {" "}
      <h1> Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      <Pizza />
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/salamino.jpg" alt="Pizza Salamino "></img>
      <h3>Pizza Salamino</h3>
      <p>Tomato, mozarella, and pepperon</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;
  console.log(isopen);
  // if (hour >= openHour && hour <= closeHour) alert("We're Currently Open");
  // else alert("Sorry , We're Closed");
  // console.log(hour);

  return (
    <footer className="footer">
      {" "}
      {new Date().toLocaleTimeString()}We are Currently Open{" "}
    </footer>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
