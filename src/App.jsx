import React, { useState } from "react";
import Form from "./Components/form.jsx";
import Card from "./Components/card.jsx";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = (input1, input2) => {
    if (input1.trim().length < 3 && input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setFormData({ input1, input2 });
      setError(null);
    }
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      {error && <p>{error}</p>}
      {formData && <Card {...formData} />}
    </div>
  );
};

export default App;
