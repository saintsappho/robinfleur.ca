export default function PortfolioDropdown() {

  
  return (
    <>
      <div className="btn-group">
        <button type="button" className="btn btn-danger">
          Portfolio
        </button>
        <button
          type="button"
          className="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="sr-only">
            {" "}
            <i className="fa-solid fa-chevrons-down fa-shake"></i>{" "}
          </span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Petconnect
          </a>
          <a className="dropdown-item" href="#"></a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </div>
      </div>
    </>
  );
}
