import "./App.css";
import "./App.css";
import Info from "./components/Info";

export default function App() {
  return (
    <>
      <Info title="This is TO-Do Application" />
      <AddItem text = "niraj" number={1} />
    </>
  );
}

function AddItem(props) {
  const value = props.text;
  const name = "This is input field"
  return (
    <div>
      <form method="POST">
        <label htmlFor="text-form">Name: </label>
        <input type="text"  value={value} onChange={name} id="text-form" />
        <p>{props.number}</p>
      </form>
    </div>
  );
}



