import React, { useState } from "react";
import Form from "./Form";

function Information() {
  const [informationData, setInformationData] = useState([]);

  function addInformation(addItem) {
    setInformationData([addItem]);
  }

  return (
    <div>
      <h1>state and events</h1>
      <Form addInformationItem={addInformation} />
      {informationData.map((item, index) => (
        <ul key={index}>
          <li>{item.firstName}</li>
        </ul>
      ))}
    </div>
  );
}

export default Information;
