import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Base from './Basepage/Base';
import Mainpage from './mapdashboard/Mainpage';
import UserPageSingup from './singupuser/UserPageSingup';
import EntrepriseProfile from './profileEntreprise/EntrepriseProfile';
import Main from './dashboard_responsable/Main';
import Login from './Login/Login';
import ChatMain from './chatapp/ChatMain';

function App() {
  return  <Routes>
  <Route path="/chatapp" element={ <ChatMain/> } />
  <Route path="/singup" element={ <Base/> } />
  <Route path="/dashboard/:id" element={ <Mainpage/> } />
  <Route path="/usersingup" element={ <UserPageSingup/> } />
  <Route path="/entreprisedetaille" element={ <EntrepriseProfile/> } />
  <Route path="/mainresponsable/:id" element={ <Main/> } />
  <Route path="/login" element={ <Login /> } />
</Routes>
    
}

export default App;
