import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import close from "../../images/close.png";
import menu from "../../images/nav.png";


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [navOpen, setnavOpen] = useState(false);

  const toggleNavBar = () => {
    setnavOpen(!navOpen);
  };

  const closeNavBar = () => {
    setnavOpen(false);
  };
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="py-4 shadow-sm shadow-gray-200/10 sticky top-0 z-50 bg-black ">
      <Container>
        <nav className="flex justify-between flex-wrap  items-center">
          <div>
            <Link to="/" onClick={closeNavBar}>
              <Logo />
            </Link>
          </div>
          <div className="md:hidden mr-4">
            <button onClick={toggleNavBar}>
              {navOpen ? (<img src={close} alt="close" />) : (<img src={menu} alt="menu" />)}
            </button>
          </div>
          <ul className={` ml-auto  md:flex md:w-auto md:items-center md:flex-row   ${navOpen ? "w-full flex flex-col items-center" : "hidden"}`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    }}
                    className="inline-block font-bold text-white px-6 py-2 duration-200 hover:bg-header-hover-color hover:text-[#DCDF00] rounded-full text-xl"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header