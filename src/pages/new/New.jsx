
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./new.scss";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const New = () => {
    return ( 
        <div className="new">
            <SideBar/>
        <div className="newContainer">
            <NavBar/>
            <div className="top">
                <h1>Add New User</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <CameraAltIcon className="camera"/>
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor="user">Username</label>
                            <input type="text" placeholder="john_dae"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="name">Name And Surname</label>
                            <input type="text" placeholder="John Doe"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder="john_dae@gmail.com"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" placeholder="+1 234 236 32"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="address">Address</label>
                            <input type="email" placeholder="23 elson st, Vancouver"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="country">Country</label>
                            <input type="text" placeholder="Canada"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="password">Password</label>
                            <input type="password"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
     );
}
 
export default New;