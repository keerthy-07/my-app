
import Login from "./page/login/login";
import Home from "./page/home/home";
import { Routes,Route} from "react-router-dom";



function App() {
  
  
return (
  <>  

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/"Login element={<Login/>}/>
        <Route path="/"Home element={<Home/>}/>
      </Routes>
  </>
  );
}

export default App;