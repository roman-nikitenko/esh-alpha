import './App.scss';
import logo from './img/logo.svg';
import welcome from './img/welcome.png'
import { Menu } from "./components/menu-mobile/Menu";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();
  const dropRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      console.log(e.target === menuRef.current || e.target === dropRef)
    }

    document.addEventListener('mousedown', handler);

    return () => {
      document.addEventListener('mousedown', handler);
    }
  });

  return (
    <>
      <header className="header">
        <div className="header__top">
          <a href="#">
            <img className="logo" src={logo} alt="logo"/>
          </a>

          <button
            ref={menuRef}
            type="button"
            className={classNames('icon', 'icon--menu', {
              'icon--menu--close': menuOpen,
            })}
            onClick={() => {
              setMenuOpen(current => !current);
            }}
          >
          </button>
        </div>

        <div className="header__bottom">
          <div className="header__content">
            <img className="header__welcome" src={welcome} alt="Welcome to ESH Aplha"/>
            <span className="header__text">
            Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet.
            Molestie metus morbi purus amet malesuada proin amet facilisis.
          </span>
            <button className="button button--header" type="submit">Contact us</button>
          </div>

          <div className="header__content-image">
            <div className="header__image"></div>
          </div>
        </div>
      </header>

      {menuOpen && <Menu dropRef={dropRef} />}

      <main>
        <section>
          <h2>About</h2>
        </section>

        <section>
          <h2>Service</h2>
        </section>
      </main>

      <footer>Footer</footer>
    </>
  )
}

export default App;
