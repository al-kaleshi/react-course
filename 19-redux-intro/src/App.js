import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  // const userState = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {!isLoggedIn ? <Auth /> : <UserProfile/>}
      {isLoggedIn && <Counter />}
    </Fragment>
  );
}

export default App;
