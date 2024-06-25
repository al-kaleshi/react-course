import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = data.duration > 0 && data.annualInvestment > 0 && data.expectedReturn > 0 && data.initialInvestment > 0;

  const handleChange = (identifier, updatedValue) => {
    setData((prevData) => {
      return {
        ...prevData,
        [identifier]: +updatedValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onDataChange={handleChange} data={data} />
      {!inputValid && <p className="center">Please enter valid input data.</p>}
      {inputValid && <Table data={data} />}
    </>
  );
}

export default App;
