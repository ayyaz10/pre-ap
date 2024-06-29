import "./App.css";
import Todos from "./component/Todo";
import WelcomeMesssage from "./component/WelcomeMesssage";

function App() {
  return (
    <>
      {/* <WelcomeMesssage
        isLoggedIn={false}
        user={{ name: "Mufleh", type: "guest" }}
      /> */}
      <Todos />
      <WelcomeMesssage
        isLoggedIn={true}
        user={{ name: "Danial", type: "guest" }}
      />
    </>
  );
}

export default App;
