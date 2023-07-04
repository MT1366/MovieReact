import logo from './logo.svg';
import Table from './component/TableComponent';
import { MyContext } from './Context API/myContext';
import SearchComponent from './component/SearchComponent';
import MyContextProvider from './Context API/myContext';
// import './App.css';

function App() {
  return (
    <div>
      <SearchComponent />
      <Table />
    </div>
  )
}

export default App;

