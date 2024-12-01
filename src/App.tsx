import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { User } from "./models/User";
import { useSelector } from "react-redux";
import { RootState } from "./redux/ReduxStore";
function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);

  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <>
      <div>
        <HomePage displayLogin={displayLogin} />
      </div>
    </>
  );
}

export default App;
