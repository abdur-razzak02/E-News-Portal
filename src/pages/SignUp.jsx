import { useContext } from "react";
import { FaUser, FaLock, FaEnvelope, FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const checked = e.target.password.checked;
    console.log({ name, email, photo, password, checked });

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 text-gray-700 border-none outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 text-gray-700 border-none outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Photo URL
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
              <FaImage className="text-gray-500 mr-2" />
              <input
                type="text"
                name="photo"
                className="w-full px-3 py-2 text-gray-700 border-none outline-none"
                placeholder="Enter your photo URL"
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

          {/* Terms and Conditions Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              name="checked"
              type="checkbox"
              className="h-4 w-4 text-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I accept the
              <a className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
