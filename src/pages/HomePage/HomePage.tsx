import { LoginForm } from "../../features/authentication/Components/LoginForm/LoginForm";
import { User } from "../../models/User";

interface HomePageProps {
  displayLogin: boolean;
  // updateLoggesdInUser: (user: User) => void;
}

export default function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div>
      <h1 className="page">Home page</h1>
      {props.displayLogin ? <LoginForm /> : <></>}
    </div>
  );
}
