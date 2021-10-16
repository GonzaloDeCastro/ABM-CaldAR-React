import React from 'react';
import { useState } from 'react';

const EditClient = ({ onEdit }) => {
  const [company, setCompany] = useState('');
  const [address, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [boilerA, setBoilerA] = useState('');
  const [email, setEmail] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!company || !address) {
      alert('Please complete all fields');
      return;
    }

    onEdit({ company, address, phone, boilerA, email, reminder });
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
