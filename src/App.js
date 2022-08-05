
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
          <Route index element={<Home/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              
              </Route>

            </Route>

      </Routes>
    {/* // <Home/>
    // <Login/>
    // <List/>
    // <New/>
    // <Single/> */}
    </div>
  );
}

export default App;
