
import Login from "./page/login/login";
import Home from "./page/home/home";
import { Route,Routes} from "react-router-dom";



function App() {
  
  
return (
  <>  

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
  
  </>
  );
}

export default App;