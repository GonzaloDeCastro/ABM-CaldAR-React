import React from 'react';
import Client from './Client';
const Clients = ({ clients, onDelete, onEdit }) => {
  return (
    <div>
      {clients.map((client) => (
        <Client
          key={client.id}
          client={client}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default Clients;
