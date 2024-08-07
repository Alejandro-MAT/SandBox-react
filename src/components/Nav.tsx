import logo from "../assets/images/logo-principal.svg";

function Nav() {
  return (
    <nav className="nav">
          <div className="container nav-container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <span className="btn-nav" id="btn-menu">
              Menu
            </span>
            <ul className="barr-nav">
              <li>
                <a href="/">Demos</a>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Blocks</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <span className="btn-nav" id="btn-close">
                Close
              </span>
            </ul>
          </div>
        </nav>
  )
}

export default Nav