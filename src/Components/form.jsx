import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
  
    const handleInputChange1 = (e) => {
      setInput1(e.target.value);
    };
  
    const handleInputChange2 = (e) => {
      setInput2(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(input1, input2);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          NOMBRE
          <input
            type="text"
            value={input1}
            onChange={handleInputChange1}
          />
        </label>
        <br />
        <label>
          CANCION
          <input
            type="text"
            value={input2}
            onChange={handleInputChange2}
          />
        </label>
        <br />
        <button type="submit">
          Enviar
        </button>
      </form>
    );
  };
  
  export default Form;