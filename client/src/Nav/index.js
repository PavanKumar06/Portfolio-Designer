function Nav() {
  return (
    <div>
      <nav class="profile-nav navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Portfolio Designer
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Edit Details
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My Portfolios
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
          <form
            class="form-inline my-2 my-lg-0 float-end"
            style={{
              display: "inline-flex",
              float: "right",
              position: "relative",
            }}
          >
            <input
              class="form-control mr-sm-2 float-end"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                display: "inline-flex",
                float: "right",
                position: "relative",
              }}
            />
            <button
              class="btn btn-outline-light my-2 my-sm-0 float-end"
              type="submit"
              style={{
                display: "inline-flex",
                float: "right",
                position: "relative",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
