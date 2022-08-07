import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ItemListcontainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {


  return (
    <div className="App">
    <Header/>
    <ItemListcontainer/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
