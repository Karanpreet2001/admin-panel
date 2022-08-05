
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const NavBar = () => {
    return ( 
        <div>
        <div className="navbar">
           <div className="wrapper">
            <div className="inputSearch"><input type="text" placeholder="Search..." className="search" /><SearchOutlinedIcon/></div>

            <div className="items">
                <div className="item">
                    <TranslateOutlinedIcon className="icon" /> English
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className="icon" /> 
                    <div className="counter">1</div>
                </div>
      
                <div className="item">
                    <DarkModeOutlinedIcon className="icon" /> 
                    

                </div>

                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon" /> 
                    <div className="counter">1</div>

                </div>
                <div className="item">
                    <FormatListBulletedOutlinedIcon className="icon" /> 
                </div>
                <div className="item">
               
                    <img src="https://img.rawpixel.com/private/static/images/website/2022-05/px142077-image-kwvvvktc.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=0cfd8aa6e66ad55612f900d479a9d0de" alt="" className="iconImage" />
                </div>

            </div>
            
           </div>

        </div>
        <hr />

        </div>

       
     );
}
 
export default NavBar;