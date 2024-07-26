import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
