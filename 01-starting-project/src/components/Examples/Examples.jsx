import TabButton from "../TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data.js";
import { useState } from "react";
import Section from "../Section/Sections.jsx";
import Tabs from "../Tabs/Tabs.jsx";

export default function Examples() {
  const [data, setData] = useState(null);

  const handleClick = (selected) => {
    setData(selected);
  };

  let tabContent =
    data === null ? (
      <div id="tab-content">
        <p>Please Select a Tab</p>{" "}
      </div>
    ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[data].title}</h3>
        <p>{EXAMPLES[data].description}</p>
        <pre>
          <code>{EXAMPLES[data].code}</code>
        </pre>
      </div>
    );

  let buttons = (
    <>
      <TabButton
        isSelected={data === "components"}
        onClick={() => handleClick("components")}
      >
        Components
      </TabButton>
      <TabButton isSelected={data === "jsx"} onClick={() => handleClick("jsx")}>
        JSX
      </TabButton>
      <TabButton
        isSelected={data === "props"}
        onClick={() => handleClick("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={data === "state"}
        onClick={() => handleClick("state")}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section id="examples">
      <Tabs buttons={buttons}>{tabContent}</Tabs>
    </Section>
  );
}
