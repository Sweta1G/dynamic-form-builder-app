import React from 'react';

const Preview = ({ fields }) => {
  return (
    <div>
      <h3>Form Preview</h3>
      {fields.map(field => (
        <div key={field.id}>
          <label>{field.label}</label>
          {field.type === 'text' && <input type="text" />}
          {field.type === 'dropdown' && (
            <select>
              {field.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          )}
          {field.type === 'date' && <input type="date" />}
          {field.type === 'checkbox' && <input type="checkbox" />}
        </div>
      ))}
    </div>
  );
};

export default Preview;