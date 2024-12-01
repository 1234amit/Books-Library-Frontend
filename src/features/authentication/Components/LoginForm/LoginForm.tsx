import { useRef, useState } from "react";
import { User } from "../../../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { loginUser } from "../../../../redux/slices/AuthenticationSlices";

// interface LoginFormProps {
//   updateLoggesdInUser: (user: User) => void;
// }

export const LoginForm: React.FC = () => {
  // const [error, setError] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // bellow code react-redux
  const auth = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
    //   try {
    //     const req = await axios.post("http://localhost:8000/auth/login", {
    //       email: emailRef.current.value,
    //       password: passwordRef.current.value,
    //     });
    //     setError(false);
    //     console.log(req.data.user);
    //     updateLoggesdInUser(req.data.user);
    //   } catch (error) {
    //     setError(true);
    //   }
    // }

    // write down bellow code using redux
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <div className="">
      <div className="text-red-500 text-center">
        {auth.error ? (
          <p className="font-bold">Username and password is incorrect</p>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
            Please Login Here
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ref={emailRef}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ref={passwordRef}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleLoginUser}
            >
              Login
            </button>
          </form>
          {/* don't have an account */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 font-semibold">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
