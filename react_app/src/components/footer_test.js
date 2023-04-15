const Footer = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Developed by <a href="https://github.com/diamondalltheway" className="hover:underline" target="_blank" rel="noreferrer">Hunter Stevens</a> and <a href="https://github.com/AlonsoLobato" className="hover:underline" target="_blank" rel="noreferrer">Alonso Lobato</a>.
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <a href="mailto:hunter@toplobster.io?cc=alonso.lobato.jimenez@gmail.com" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;
