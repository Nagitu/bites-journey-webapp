
import { render, fireEvent } from '@testing-library/react';
import ActionButton from './Action.Button';
import { jsx as _jsx } from "react/jsx-runtime";
test('ActionButton memanggil onSave dan onCancel dengan benar', () => {

  const onSave = jest.fn();
  const onCancel = jest.fn();

  
  const {
    getByText
  } = render( /*#__PURE__*/_jsx(ActionButton, {
    onSave: onSave,
    onCancel: onCancel
  }));


  const saveButton = getByText('Simpan');
  fireEvent.click(saveButton);

 
  expect(onSave).toHaveBeenCalledTimes(1);


  const cancelButton = getByText('Batal');
  fireEvent.click(cancelButton);

 
  expect(onCancel).toHaveBeenCalledTimes(1);
});