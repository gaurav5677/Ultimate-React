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
      <h1> Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      {/* 
      // Conditional Rendering Using && operator
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={x.name} photoName={x.photoName} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* Conditional Rendering using Ternary Operator ?   
    more prefered over &&  */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={x.name} photoName={x.photoName} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu , please come back later </p>
      )}

      {/* Rendering list :- Means when we have an array and we want to create one component for each element of the arrya  */}

      {/* for this we mostly use javaScripts  map() method   */}

      {/*<Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={10}
        photoName="pizzas/salamino.jpg"
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
        //  soldOut= false
      />*/}
    </main>
  );
}

function Pizza(props) {
  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isopen);
  // if (hour >= openHour && hour <= closeHour) alert("We're Currently Open");
  // else alert("Sorry , We're Closed");
  // console.log(hour);
  if (!isOpen)
    return (
      <p>
        We're are Happy to Welcome you between {openHour}:00 and {closeHour}
        :00.
      </p>
    );

  return (
    <footer className="footer">
      {/* Conditional Rendering Using Ternaries Operator  */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're are Happy to Welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
      {/* {isOpen && (
        <div className="order">
          <p>We're open till {closeHour}:00 , Come visit us or Order Online </p>

          <button className="btn">Order</button>
        </div>
      )} */}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open till {props.closeHour}:00 , Come visit us or Order Online{" "}
      </p>

      <button className="btn">Order</button>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
