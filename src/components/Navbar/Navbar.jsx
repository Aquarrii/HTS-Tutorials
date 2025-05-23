import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand ps-3"><i className="fa-solid fa-terminal"></i> HTS Tutorials</Link>
                <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="basic-navbar-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Basic
                            </div>
                            <ul className="dropdown-menu mb-3 me-3" aria-labelledby="basic-navbar-dropdown">
                                <li>
                                    <Link to="/basic1" className="dropdown-item" href="#">Basic 1</Link>
                                </li>
                                <li>
                                    <Link to="/basic2" className="dropdown-item" href="#">Basic 2</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;