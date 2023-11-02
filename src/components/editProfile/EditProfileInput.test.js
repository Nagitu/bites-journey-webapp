import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditProfileInput from './EditProfile.input';

test('renders EditProfileInput component', () => {
  const label = 'Name';
  const name = 'name';
  const value = 'John Doe';
  const onChange = jest.fn();

 const { getByLabelText } = render(
  <EditProfileInput label={label} name={name} value={value} onChange={onChange} />
);


 
  const inputElement = getByLabelText(`${label}:`);

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('name', name);
  expect(inputElement).toHaveValue(value);

  

});
