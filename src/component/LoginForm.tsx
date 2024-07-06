import { useState, SyntheticEvent } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target, {
      email,
      password,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        value={email}
        placeholder="Enter your email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        value={password}
        placeholder="Enter your password"
      />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
