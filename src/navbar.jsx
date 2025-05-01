function Navbar() {
  return (
    <div className="navbar shadow-sm bg-white">
      <div className="navbar-start">
        <a className="pl-4 text-xl font-bold text-primary">Mundo Anime</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <a className="btn btn-hidden btn-ghost text-secondary mx-1 hover:bg-primary hover:text-white">
              Ver Animes Disponibles
            </a>
          </li>
          <li>
            <a className="btn btn-hidden btn-ghost text-secondary mx-1 hover:bg-primary hover:text-white">
              Agregar Anime
            </a>
          </li>
          <li>
            <a className="btn btn-hidden btn-ghost text-secondary mx-1 hover:bg-primary hover:text-white">
              Editar Anime
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-hidden btn-ghost text-error hover:bg-primary hover:text-white">
          Eliminar Anime
        </a>
      </div>
    </div>
  );
}
export default Navbar;
