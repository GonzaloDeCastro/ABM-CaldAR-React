import React from 'react';
import Client from './Client';
const Clients = ({ clients, onDelete, onToggle }) => {
  return (
    <div>
      {clients.map((client) => (
        <Client
          key={client.id}
          client={client}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Clients;
