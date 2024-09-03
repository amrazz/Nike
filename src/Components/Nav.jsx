import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants/Index";
const Nav = () => {
  console.log(navLinks);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-montserrat leading-normal
                 text-lg text-slate-gray transition-all hover:text-coral-red text-b"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            className="cursor-pointer"
            src={hamburger}
            width={25}
            height={25}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
