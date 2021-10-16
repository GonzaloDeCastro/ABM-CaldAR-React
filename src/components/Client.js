const Client = ({ client, onDelete, onEdit }) => {
  return (
    <div className={`client ${client.reminder ? 'reminder' : ''}`}>
      <h3>
        Company: {client.company}
        <button className='btn' onClick={onEdit}>
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
    </div>
  );
};

export default Client;
