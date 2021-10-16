import React from 'react';
import { useState } from 'react';

const EditClient = ({ clientToEdit, onEdit, setShowEditClient }) => {
  const [company, setCompany] = useState(clientToEdit.company);
  const [address, setAdress] = useState(clientToEdit.address);
  const [phone, setPhone] = useState(clientToEdit.phone);
  const [boilerA, setBoilerA] = useState(clientToEdit.boilerA);
  const [email, setEmail] = useState(clientToEdit.email);
  const [reminder, setReminder] = useState(clientToEdit.reminder);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!company || !address) {
      alert('Please complete all fields');
      return;
    }
    onEdit({
      id: clientToEdit.id,
      company,
      address,
      phone,
      boilerA,
      email,
      reminder
    });
    return setShowEditClient(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <h1>Edit Client</h1>
        <label>Company</label>
        <input
          type='text'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Phone</label>
        <input
          type='number'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Boiler type A</label>
        <input
          type='number'
          placeholder='Stock'
          value={boilerA}
          onChange={(e) => setBoilerA(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Confirm Edit' className='btn btn-block' />
    </form>
  );
};

export default EditClient;
