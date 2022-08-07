import "./home.scss";
import SideBar from "../../components/sidebar/SideBar"
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/charts/Charts";

import Tablular from "../../components/table/Table";

const Home = () => {
    return ( 
    <div className="home">
        <SideBar/>
        <div className="homeContainer">
            <NavBar/>
            <div className="widgets">
                <Widget type = "user" />
                <Widget type = "order"/>
                <Widget type = "earning"/>
                <Widget type = "balance"/>
                </div>
            <div className="charts">
                <Featured/>
                <Chart aspect={2.5/1} title="Last 6 months (Revenue)"/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Latest Transaction</div>
                <Tablular/>
            </div>
        </div>
    </div> );
}
 
export default Home;