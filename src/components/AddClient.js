import React from 'react';
import { useState } from 'react';

const AddClient = ({ onAdd }) => {
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

    onAdd({ company, address, phone, boilerA, email, reminder });

    setCompany('');
    setAdress('');
    setPhone('');
    setBoilerA('');
    setEmail('');
    setReminder(false);
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
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
      <input type='submit' value='Confirm' className='btn btn-block' />
    </form>
  );
};

export default AddClient;
