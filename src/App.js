 import './App.css';
import {Data} from './data';
import { Routes, Route, useNavigate } from "react-router-dom";
import { ContactAdditionForm } from './ContactAdditionForm';

function App() {
  const navigate = useNavigate();
        return (
          
          <div className="App">
      
            
                <Routes>
                 
                  <Route path="/"
                  element={<ContactAdditionForm/>}/>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/data" element={<Data />} />
                  

                  </Routes>
                  
                  </div>
             
        ) 
      }
      
      function NotFound(){
        return <h1>404 not found</h1>
      }
      
          
      export default App;
      
