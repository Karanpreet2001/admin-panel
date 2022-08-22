

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
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const SideBar = () => {

  const {dispatch} = useContext(DarkModeContext);



    return ( 
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{textDecoration: "none"}}><span className="logoName">AdminPanel</span></Link>
            </div> <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    <p className="title">LIST</p>

                    <li><PermIdentityIcon className="icon"/><Link to="/users" style={{textDecoration: "none"}}><span>Users</span></Link></li>
                    <li><InventoryIcon className="icon"/><Link to="/products" style={{textDecoration: "none"}}><span>Products</span></Link></li>
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
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
     );
}
 
export default SideBar;
