import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthApi from "./Utils/AuthApi";
import { hassSignned } from "./action/auth-api";

function App() {
  const [auth, setAuth] = useState(true);

  const readSession = async () => {
    const res = await hassSignned();
    if (res.data.auth) {
      setAuth(true);
    }
  };
  useEffect(() => {
    readSession();
  }, [auth]);
  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
