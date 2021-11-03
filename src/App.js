import logo from './logo.svg';
import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaBeer, FaHeart, FaFolder } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ProSidebar>
        <SidebarHeader>
          <MenuItem>Header</MenuItem>
        </SidebarHeader>
        <SidebarContent>          
          <Menu title="Menu">
            <MenuItem icon={<FaHeart />}>Component 0</MenuItem>
            <SubMenu icon={<FaBeer />}  title="Components">
              <MenuItem icon={<FaFolder />}>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <MenuItem>Footer</MenuItem>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default App;
