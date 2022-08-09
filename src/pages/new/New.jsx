
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./new.scss";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({title, inputs}) => {

    const [file, setFile] = useState("");

    console.log(file);
    return ( 
        <div className="new">
            <SideBar/>
        <div className="newContainer">
            <NavBar/>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
                <div className="right">
                    <form>
                    <div className="formInput">

                    <label htmlFor="file">
                    Image: <DriveFolderUploadIcon className= "icon"/>
                        </label>
                        <input type="file" name="" onChange={(e)=>setFile(e.target.files[0])} id="file" style={{display:"none"}} />
                        </div>
                    
                       { inputs.map((input)=>(
                             <div className="formInput" key={input.id}>
                            <label htmlFor="user">{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder}/>
                            </div>
                       ))}
                       
                        <div className="formInput">
                            <button className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
     );
}
 
export default New;