import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      const goToMainPage = () => {
        navigate(data[0].id.toLowerCase());
      };
      goToMainPage();
    }
  }, [location.pathname, data, navigate]);

  const elements = data.map((tab) => (
    <li key={tab.id}>
      <NavLink
        className={`ml-2 mr-4 font-semibold hover:underline ${
          location.pathname.includes(tab.id.toLowerCase())
            ? "text-yellow-500"
            : "text-white"
        }`}
        to={`/${tab.id.toLowerCase()}`}
      >
        {tab.title}
      </NavLink>
    </li>
  ));

  return (
    <header className="bg-blue-500 text-white py-4">
      <nav>
        <ul className="flex space-x-4">{elements}</ul>
      </nav>
    </header>
  );
};

export default Header;
