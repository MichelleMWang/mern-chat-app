import "./App.css";
import StudentSigninPage from "./Pages/StudentSigninPage";
import TutorSigninPage from "./Pages/TutorSigninPage";
import AdminSigninPage from "./Pages/AdminSigninPage";
import ApplicationPage from "./Pages/ApplicationPage";
import Homepage from "./Pages/Homepage"
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Dashboard from "./Pages/Dashboard";
import Students from "./Pages/Students";
import Calendar from "./Pages/Calendar";
import Settings from "./Pages/Settings";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact ></Route>
      <Route path="/studentsignin" component={StudentSigninPage} />
      <Route path="/tutorsignin" component={TutorSigninPage} />
      <Route path="/adminsignin" component={AdminSigninPage}></Route>
      <Route path="/chats" component={Chatpage} />
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/applications" component={ApplicationPage}></Route>
      <Route path="/students" component={Students}></Route>
      <Route path="/calendar" component={Calendar}></Route>
      <Route path="/settings" component={Settings}></Route>
    </div>
  );
}

export default App;
 