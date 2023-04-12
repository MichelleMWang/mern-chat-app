import "./App.css";
import StudentSigninPage from "./Pages/StudentSigninPage";
import TutorSigninPage from "./Pages/TutorSigninPage";
import AdminSigninPage from "./Pages/AdminSigninPage";
import ApplicationPage from "./Pages/ApplicationPage";
import Homepage from "./Pages/Homepage"
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Dashboard from "./Pages/Dashboard";

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
    </div>
  );
}

export default App;
 