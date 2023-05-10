import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Users from "./components/Users";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  
  return (
    <div>
      {/* { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button> */}
      <Users></Users>
    </div>
  );
}

export default App;
