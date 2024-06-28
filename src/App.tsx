import "./App.css";
import Cart from "./component/Cart";
import Counter from "./component/Counter";
import LoginForm from "./component/LoginForm";
import Todos from "./component/Todo";

function App() {
  return (
    <>
      <Todos />
      {/* <Counter />
      <Cart /> */}
      <LoginForm />
    </>
  );
}

export default App;
