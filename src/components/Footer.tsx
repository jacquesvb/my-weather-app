const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          2024 Jacques Van Blokland
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-xl text-white sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/jacques-van-blokland/"
              className="hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
