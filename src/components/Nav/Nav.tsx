import { useState } from "react";
import logo from "../../assets/images/logo-principal.svg";

export function Nav() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleMenu = ()=> setIsOpen(!isOpen);

  return (
    <nav className='py-5 px-0'>
          <div className='container flex justify-between'>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <span className='md:hidden' id="btn-menu" onClick={toogleMenu}>
              Menu
            </span>
            <ul className={isOpen? 'active' : `hidden md:flex`}>
              <li>
                <a className="text-white md:text-paragraph-color" href="/">Demos</a>
              </li>
              <li>
                <a className="text-white md:text-paragraph-color" href="/">Pages</a>
              </li>
              <li>
                <a className="text-white md:text-paragraph-color" href="/">Projects</a>
              </li>
              <li>
                <a className="text-white md:text-paragraph-color" href="/">Blog</a>
              </li>
              <li>
                <a className="text-white md:text-paragraph-color" href="/">Blocks</a>
              </li>
              <li>
                <a className="text-white md:text-paragraph-color" href="/">Documentation</a>
              </li>
              <span className='font-semiBold absolute right-[10px] top-[20px] md:hidden' id="btn-close" onClick={toogleMenu}>
                Close
              </span>
            </ul>
          </div>
        </nav>
  )
}
