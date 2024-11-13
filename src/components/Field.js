import React from 'react';

const Field = ({ field, updateField, deleteField }) => {
  const handleLabelChange = (e) => {
    updateField(field.id, { ...field, label: e.target.value });
  };

  const handleOptionsChange = (e) => {
    updateField(field.id, { ...field, options: e.target.value.split(',') });
  };

  return (
    <div>
      <input type="text" value={field.label} onChange={handleLabelChange} placeholder="Label" />
      {field.type === 'dropdown' && (
        <input type="text" value={field.options.join(',')} onChange={handleOptionsChange} placeholder="Options (comma separated)" />
      )}
      <button onClick={() => deleteField(field.id)}>Delete</button>
    </div>
  );
};

export default Field;