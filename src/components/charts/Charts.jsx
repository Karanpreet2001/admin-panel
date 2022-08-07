import "./charts.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {


    const data = [
        {name: "Jan", total: 1200},
        {name: "Feb", total: 2100},
        {name: "Mar", total: 800},
        {name: "Apr", total: 1600},
        {name: "May", total: 900},
        {name: "Jun", total: 1700}

      ];
      

    return ( 
        <div className="charts-container">
          
             <div className="title">Last 6 months (Revenue)</div>
          <ResponsiveContainer width="100%" height={290}>
          <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" color="gray" fontSize={15} />
          <YAxis color="gray" fontSize={15} />
          <Tooltip />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8"  />
        
        </AreaChart>
        </ResponsiveContainer>
        
        </div>
     );
}
 
export default Chart;