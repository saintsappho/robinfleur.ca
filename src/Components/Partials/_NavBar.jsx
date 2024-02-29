import PortfolioDropdown from "./_PorfolioDropdown";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>robinFleur</h1>
      <div className="dropdown show">
        <button
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ☰
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">
            About
          </a>
          <a className="dropdown-item" href="#">
            Contact
          </a>
          <PortfolioDropdown />
        </div>
      </div>
    </div>
  );
}
