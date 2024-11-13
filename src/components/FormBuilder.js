import React, { useState } from 'react';
import Preview from './Preview';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [preview, setPreview] = useState(false);

  const handleAddField = (type) => {
    const id = Date.now();
    setFormFields([...formFields, { id, type, label: '', options: [] }]);
  };

  const handleDeleteField = (id) => {
    setFormFields(formFields.filter(field => field.id !== id));
    const newFormData = { ...formData };
    delete newFormData[id];
    setFormData(newFormData);
  };

  const handleFieldChange = (id, key, value) => {
    setFormFields(formFields.map(field => field.id === id ? { ...field, [key]: value } : field));
  };

  const handleInputChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const handleReset = () => {
    setFormData({});
    setPreview(false);
  };

  return (
    <div>
      <div className="field-options">
        <button onClick={() => handleAddField('text')}>Add Text Input</button>
        <button onClick={() => handleAddField('dropdown')}>Add Dropdown</button>
        <button onClick={() => handleAddField('date')}>Add Date Picker</button>
        <button onClick={() => handleAddField('checkbox')}>Add Checkbox</button>
      </div>
      <form onSubmit={handleSubmit}>
        {formFields.map(field => (
          <div key={field.id} className="form-field">
            <input
              type="text"
              placeholder="Label"
              value={field.label}
              onChange={(e) => handleFieldChange(field.id, 'label', e.target.value)}
            />
            {field.type === 'dropdown' && (
              <input
                type="text"
                placeholder="Options (comma separated)"
                value={field.options.join(',')}
                onChange={(e) => handleFieldChange(field.id, 'options', e.target.value.split(','))}
              />
            )}
            <button type="button" onClick={() => handleDeleteField(field.id)}>Delete</button>
            {field.type === 'text' && (
              <input
                type="text"
                placeholder={field.label}
                value={formData[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {field.type === 'dropdown' && (
              <select
                value={formData[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              >
                {field.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            )}
            {field.type === 'date' && (
              <input
                type="date"
                value={formData[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {field.type === 'checkbox' && (
              <input
                type="checkbox"
                checked={formData[field.id] || false}
                onChange={(e) => handleInputChange(field.id, e.target.checked)}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {preview && <Preview fields={formFields} formData={formData} />}
    </div>
  );
};

export default FormBuilder;