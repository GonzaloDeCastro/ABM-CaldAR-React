const Client = ({ client, onDelete, onToggle }) => {
  return (
    <div
      className={`client ${client.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(client.id)}
    >
      <h3>
        Company: {client.company}
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
    </div>
  );
};

export default Client;
