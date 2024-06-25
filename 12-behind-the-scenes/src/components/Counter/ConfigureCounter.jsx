import { useState } from "react";
import { log } from "../../log";
function ConfigureCounter({onCount}) {
  log('<ConfigureCounter />', 1);
  
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onCount(enteredNumber);
    setEnteredNumber(0);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input id={enteredNumber} type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}

export default ConfigureCounter;
