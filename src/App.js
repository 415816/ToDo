import logo from './logo.svg';

import './App.scss';

import state from '../src/assets/db.json'
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";


function App() {
  return (
    <div className={'todo'}>
      <SideBar state={state}/>
      <Content/>
    </div>
  );
}

export default App;
