import { SiHomebridge } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContex";
import { AuthContext } from "../context/AuthContex";
import { BiLogOut } from "react-icons/bi";

//1) if the user is logged in: show the logout button
//2) if the user is not logged in show register page and login
//3) only show the product page if the user is logged in
function Navbar() {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <nav
      id="app-nav"
      className="shadow-2xl p-8 flex gap-3 bg-fuchsia-50 text-fuchsia-900 dark:bg-fuchsia-900 dark:text-fuchsia-50"
    >
      <NavLink className="rounded-lg p-2" to="/">
        <SiHomebridge aria-description="Home" />
      </NavLink>
      <NavLink className="rounded-lg p-2" to="/about">
        About
      </NavLink>

      {isLoggedIn && (
        <NavLink className="rounded-lg p-2" to="/products">
          Products
        </NavLink>
      )}
      <div className="flex-1"></div>

      <div className="hidden sm:flex items-center">
        {!isLoggedIn && (
          <>
            <NavLink className="rounded-lg p-2" to="/login">
              Login
            </NavLink>

            <NavLink className="rounded-lg p-2" to="/register">
              Register
            </NavLink>
          </>
        )}

        <a
          className="rounded-lg p-2"
          href="https://github.com/TomerBu/D290323ER"
        >
          <SiHomebridge aria-description="Github" />
        </a>
        {isLoggedIn && (
          <button onClick={logout} className="rounded-lg p-2">
            <BiLogOut aria-description="Logout"></BiLogOut>
          </button>
        )}
        <button onClick={toggle} className="rounded-lg p-2">
          {darkMode ? "🌞" : "🌚"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
