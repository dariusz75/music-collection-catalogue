import './sidebar.scss';

import { Link } from 'react-router-dom';
import { useContext } from "react";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DnsIcon from '@mui/icons-material/Dns';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration: 'none'}}>
        <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">
            MAIN
          </p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">
            LISTS
          </p>
          <Link to='/users' style={{textDecoration: 'none'}}>
            <li>
              <PeopleOutlineIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{textDecoration: 'none'}}>
            <li>
              <InventoryIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <BookmarkBorderIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalPostOfficeIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className="title">
            USEFUL
          </p>
          <li>
            <StackedLineChartIcon className='icon' />
            <span>Statistics</span>
          </li>
          <li>
            <CircleNotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className="title">
            SERVICE
          </p>
          <li>
            <DnsIcon className='icon' />
            <span>System</span>
          </li>
          <li>
            <TextSnippetIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className="title">
            USER
          </p>
          <li>
            <AccountBoxOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className="color-option"
          onClick={() => dispatch({type: 'LIGHT'})}
        >
        </div>
        <div
          className="color-option"
          onClick={() => dispatch({type: 'DARK'})}
        >
        </div>
      </div>
    </div>
};

export default Sidebar;
