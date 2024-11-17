import { useContext } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { setUser, signinUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
      const password = e.target.password.value;

    signinUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 text-gray-700 border-none outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 text-gray-700 border-none outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Login
          </button>
        </form>
       
        {/* Sign up link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
