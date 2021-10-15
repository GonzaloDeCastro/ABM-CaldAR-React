import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Clients from './components/Clients';
import AddClient from './components/AddClient';

const App = () => {
  const [showAddClient, setShowAddClient] = useState(false);

  const [clients, setClients] = useState([]);

  // Add Client
  const addClient = async (client) => {
    const res = await fetch(`http://localhost:5000/clients`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(client)
    });

    const data = await res.json();

    setClients([...clients, data]);
  };

  useEffect(() => {
    const getClients = async () => {
      const clientsFromServer = await fetchClients();
      setClients(clientsFromServer);
    };
    getClients();
  }, []);

  //Fetch Clients

  const fetchClients = async () => {
    const res = await fetch(`http://localhost:5000/clients`);
    const data = await res.json();
    return data;
  };

  //Fetch Client

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/clients/${id}`);
    const data = await res.json();
    return data;
  };

  //Delete Client
  const deleteClient = async (id) => {
    await fetch(`http://localhost:5000/clients/${id}`, {
      method: 'DELETE'
    });

    setClients(clients.filter((client) => client.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const clientToToggle = await fetchTask(id);
    const updTask = { ...clientToToggle, reminder: !clientToToggle.reminder };

    const res = await fetch(`http://localhost:5000/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });

    const data = await res.json();

    setClients(
      clients.map((client) =>
        client.id === id ? { ...client, reminder: data.reminder } : client
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddClient(!showAddClient)}
        showAdd={showAddClient}
      />
      {showAddClient && <AddClient onAdd={addClient} />}
      {clients.length > 0 ? (
        <Clients
          clients={clients}
          onDelete={deleteClient}
          onToggle={toggleReminder}
        />
      ) : (
        'No Clients'
      )}
    </div>
  );
};

export default App;
