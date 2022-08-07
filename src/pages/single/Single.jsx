import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./single.scss";


const Single = () => {
    return ( 
        <div className="single">
            <SideBar/>
        <div className="singleContainer">
            <NavBar/>
            </div>

    </div> 
     );
}
 
export default Single;