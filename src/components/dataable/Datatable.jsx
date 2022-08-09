
import "./datatable.scss";

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datasource";
import { useState } from "react";


const Datatable = () => {

    const [data, setData] = useState(userRows);
    const actionColumn = [
        {field: "action",
        headerName : "Action",
        width: 200,
        renderCell: (params)=>{
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }    
    }

    ];


    const handleDelete= (id) =>{
        setData(data.filter(item=> item.id !== id));

    }

    
    return ( 
        <div className="datatable" style={{ height: 1000, width: '100%' }}>
         <DataGrid className="grid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
        </div>
    );
}
 
export default Datatable;