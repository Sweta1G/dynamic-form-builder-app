import React, { useState } from 'react';

const Form = ({ fields }) => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map(field => (
          <div key={field.id}>
            <label>{field.label}</label>
            {field.type === 'text' && <input type="text" onChange={(e) => handleChange(field.id, e.target.value)} />}
            {field.type === 'dropdown' && (
              <select onChange={(e) => handleChange(field.id, e.target.value)}>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            )}
            {field.type === 'date' && <input type="date" onChange={(e) => handleChange(field.id, e.target.value)} />}
            {field.type === 'checkbox' && <input type="checkbox" onChange={(e) => handleChange(field.id, e.target.checked)} />}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;