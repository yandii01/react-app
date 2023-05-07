function ListGroup() {
  let items = ["Jakarta", "Bogor", "Depok", "Hahaha", "Hihih"]; //Sebelumnya const untuk list dan tidak perlu variable array kosong dibawah
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
