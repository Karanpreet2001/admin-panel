

import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const SideBar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo"><span className="logoName">AdminPanel</span></div> <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    <p className="title">LIST</p>

                    <li><PermIdentityIcon className="icon"/><span>Users</span></li>
                    <li><InventoryIcon className="icon"/><span>Products</span></li>
                    <li><ListAltIcon className="icon"/><span>Orders</span></li>
                    <p className="title">USEFUL</p>

                    <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                    <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                    <li><NotificationsIcon className="icon"/><span>Notifications</span></li>

                    <p className="title">SERVICE</p>

                    <li><SettingsSystemDaydreamIcon className="icon"/><span>System Health</span></li>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>

                    <p className="title">USER</p>

                    <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
                    <li><LogoutIcon className="icon"/><span>Logout</span></li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
     );
}
 
export default SideBar;
