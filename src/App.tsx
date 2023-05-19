import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Users from "./components/Users";
import ApexChart from "./components/ApexChart";
import PieChart from "./components/PieChart";
import Home from "./components/Home";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <Home></Home>
  );
}

export default App;
