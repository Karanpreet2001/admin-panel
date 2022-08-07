import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import Chart from "../../components/charts/Charts"
import "./single.scss";
import List from "../list/List";
import Tablular from "../../components/table/Table";


const Single = () => {
    return ( 
        <div className="single">
            <SideBar/>
        <div className="singleContainer">
            <NavBar/>
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">Jane Doe</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">janedoe@gmail.com</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+1 23 43 23</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">23 Main st. New York</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="right">

                    <Chart aspect={3/1} title="User Spending (Last 6 months)"/>
                </div>
                
            </div>
            <div className="bottom">
            <h1 className="title">Last Transactions</h1>

                <Tablular/>
            </div>
            </div>

    </div> 
     );
}
 
export default Single;