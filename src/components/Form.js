import React, { useState } from "react";

function Form({ addInformationItem }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
  });

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  function handleLocationChange(event) {
    setFormData({
      ...formData,
      location: event.target.value,
    });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    addInformationItem(formData);
    
  }

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleLastNameChange}
        />
        <input
          type="text"
          placeholder="location"
          value={formData.location}
          onChange={handleLocationChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
