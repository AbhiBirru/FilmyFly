import Header from "./component/Header";
import Cards from "./component/Cards";
import AddMovie from "./component/AddMovie";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import { createContext, useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";

const defaultValue = {
  login: false,
  username: "",
  setlogin: () => {},
  setuserName: () => {},
};

const Appstate = createContext(defaultValue);

function App() {
  const [login, setlogin] = useState(false);
  const [userName, setuserName] = useState();

  return (
    <Appstate.Provider value={{ login, userName, setlogin, setuserName }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
