import React, { useState } from 'react';

const schema = [
  { id: 'age', type: 'number', label: 'Age' },
  { id: 'status', type: 'select', label: 'Employment Status', options: ['Unemployed', 'Employed'] },
  { id: 'company', type: 'text', label: 'Company Name', showIf: { field: 'status', value: 'Employed' } }
];

export default function FormGenerator() {
  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <form>
      {schema.map(field => {
        // Conditional Logic: Check if field should be hidden
        if (field.showIf && formData[field.showIf.field] !== field.showIf.value) {
          return null;
        }
        return (
          <div key={field.id}>
            <label>{field.label}</label>
            <input 
              type={field.type} 
              onChange={(e) => handleChange(field.id, e.target.value)} 
            />
          </div>
        );
      })}
    </form>
  );
}
