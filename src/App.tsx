import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { User } from "./models/User";
function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<User>();

  return (
    <>
      <div>
        <HomePage displayLogin={displayLogin} />
      </div>
    </>
  );
}

export default App;
