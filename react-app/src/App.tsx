import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(false);
  function handleOnclick(value: boolean): void {
    setAlert(value);
  }

  return (
    <div>
      {alert && <Alert onClose={() => handleOnclick(false)}>Click me</Alert>}
      <Button color="primary" onClick={() => handleOnclick(true)}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
