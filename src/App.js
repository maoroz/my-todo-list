import React from "react";
import "./AppStyle.css";
import Login from "./screens/login";
import Home from "./screens/home";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import DenseAppBar from './components/appBar/appBar';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      { user ? 
        <div> 
          <DenseAppBar/>
          <Home />
        </div> 
        : <Login />}
    </div>
  );

};

export default App;
