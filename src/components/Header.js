import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <nav className="font-sans fixed flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div
        className="mb-2 sm:mb-0 flex flex-row
        "
      >
        <div className="h-100 w-100 self-center mr-2">
          <img className="h-100 w-100 self-center" src={LOGO_URL} />
        </div>
        <div>
          <a
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          ></a>
        </div>
      </div>

      <div className="sm:mb-0 self-center">
        <a
          href="#"
          className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Home
        </a>
        <a
          href="#"
          className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
        >
          About us
        </a>
        <a
          href="#"
          className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
        >
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Header;
