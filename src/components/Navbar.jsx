import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link>About</Link>
      <Link>Career</Link>
    </>
  );

  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-2 w-40 p-3 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="mx-2 lg:mx-0">
          {user?.email}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7 font-thin">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2 items-center">
        {
          user?.photoURL ? <div><img src={ user.photoURL} alt="userImage" className="w-10 h-10 rounded-full border"/></div> : <img src={userIcon} alt="userIcon" className="w-9" />
        }
        

        {user ? (
          <button
            onClick={logoutUser}
            className="bg-red-500 text-white p-1 px-3"
          >
            Logout{" "}
          </button>
        ) : (
          <Link to={"/auth/login"} className="bg-black text-white p-1 px-3">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;