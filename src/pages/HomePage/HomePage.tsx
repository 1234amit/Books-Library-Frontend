import { LoginForm } from "../../features/authentication/Components/LoginForm/LoginForm";

interface HomePageProps {
  displayLogin: boolean;
}

export default function HomePage(props: HomePageProps): JSX.Element {
  return (
    <div>
      <h1 className="page">Home page</h1>
      {props.displayLogin ? <LoginForm /> : <></>}
    </div>
  );
}
