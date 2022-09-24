
import './App.css';
import List from './component/List';

function App() {
  console.count("App rendered!");

  const item = [{text:'item 1'},{text:'item 2'},{text:'item 3'}]
  
  return (
    <div className="App">
      <List items={item}/>
    </div>
  );
}

export default App;
