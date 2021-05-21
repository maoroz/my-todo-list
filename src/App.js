import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./screens/login";
import Home from "./screens/home";
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
