import { FC } from "react";

type WelcomeMessageProps = {
  isLoggedIn: boolean;
  user?: {
    name: String;
    type: "admin" | "moderator" | "guest";
  };
};

const WelcomeMesssage: FC<WelcomeMessageProps> = ({ isLoggedIn, user }) => {
  if (user?.type === "moderator") {
    return <p>Ask admin for access</p>;
  } else if (user?.type === "guest") {
    return <h1>No access</h1>;
  }

  return (
    <div>
      {isLoggedIn ? <h1>User logged in</h1> : <h1>User logged out</h1>}
      {user && isLoggedIn && <h1>Hello, {user.name}</h1>}
    </div>
  );
};

export default WelcomeMesssage;
