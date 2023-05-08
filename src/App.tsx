import ListGroup from "./components/ListGroup";

const handleSelectItem = (item:string) => {
  console.log(item);
}

function App() {
  let items = ["Jakarta", "Bogor", "Depok", "Hahaha", "Hihih"];
  return <h1><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup></h1>
}

export default App;