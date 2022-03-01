import logo from './logo.svg';

import './App.scss';
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";


function App() {
  return (
    <div className={'ToDo'}>
      <SideBar/>
      <Content/>
    </div>
  );
}

export default App;
