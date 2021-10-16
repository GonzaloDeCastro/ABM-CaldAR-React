import EditClient from './EditClient';
import { useState } from 'react';
const Client = ({ client, onDelete, onEdit }) => {
  const [showEditClient, setShowEditClient] = useState(false);
  return (
    <div className={`client ${client.reminder ? 'reminder' : ''}`}>
      <h3>
        Company: {client.company}
        <button
          className='btn'
          onClick={() => setShowEditClient(!showEditClient)}
        >
          Edit
        </button>
        <button
          className='btn'
          style={{ fontWeight: 'bold', color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(client.id)}
        >
          x
        </button>
      </h3>
      <p>Adress: {client.address}</p>
      <p>Phone: {client.phone}</p>
      <p>Boiler A: {client.boilerA}</p>
      <p>Email: {client.email}</p>
      {showEditClient && (
        <EditClient
          clientToEdit={client}
          onEdit={onEdit}
          setShowEditClient={setShowEditClient}
        />
      )}
    </div>
  );
};

export default Client;
