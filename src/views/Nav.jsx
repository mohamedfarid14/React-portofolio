import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            aria-label="Eleventh navbar example"
        >
            <div className="container-fluid">
                <Link to={"/"} className="nav-link text-light h4">
                    Logo
                </Link>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/store"} className="nav-link">
                                STORE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link">
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/counter"} className="nav-link">
                                COUNTER
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/todo"} className="nav-link">
                                TO-DO-LIST
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;