import './App.scss';
import logo from './img/logo.svg';
import welcome from './img/welcome.png'

function App() {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <a href="#">
            <img className="logo" src={logo} alt="logo"/>
          </a>

          <a href="#" className="icon icon--menu"></a>
        </div>

        <div className="header__bottom">
          <img className="header__welcome" src={welcome} alt="Welcome to ESH Aplha"/>
          <span className="header__text">
            Lorem ipsum dolor sit amet consectetur. Facilisis auctor a diam cursus amet.
            Molestie metus morbi purus amet malesuada proin amet facilisis.
          </span>
          <button type="submit">Contact us</button>
        </div>
      </header>

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
