import './sidebar.scss';

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

const Sidebar = () => {
  return <div className='sidebar'>

      <div className='top'>
        <span className="logo">
          Admin
        </span>
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
          <li>
            <PeopleOutlineIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className='icon' />
            <span>Products</span>
          </li>
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
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
};

export default Sidebar;
