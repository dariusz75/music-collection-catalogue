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
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleOutlineIcon />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon />
            <span>Products</span>
          </li>
          <li>
            <BookmarkBorderIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalPostOfficeIcon />
            <span>Delivery</span>
          </li>
          <li>
            <StackedLineChartIcon />
            <span>Statistics</span>
          </li>
          <li>
            <CircleNotificationsIcon />
            <span>Notifications</span>
          </li>
          <li>
            <DnsIcon />
            <span>System</span>
          </li>
          <li>
            <TextSnippetIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>colors</div>
    </div>
};

export default Sidebar;
