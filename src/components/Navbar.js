import { NavLink } from 'react-router-dom';
import dark from '../assets/dark.png';
import light from '../assets/light.png';

const Navbar = (props) => {

  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg news-navbar ${props.mode === "dark" ? "navbar-dark" : "navbar-light"
        }`} style={{
          borderBottom: `0.3px solid ${props.mode === "dark" ? "white" : "#333333"
            }`
        }}>
        <div className="container-fluid">
         
          <NavLink className="navbar-brand" to="#" style={{ fontFamily: "Pacifico" }}>NewsMonkey</NavLink>
          <div className="navbar-collapse news-navbar-content" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item"><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"} aria-current="page" >Home</NavLink></li>
              <li className="nav-item"><NavLink to="/business" className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"}>Business</NavLink></li>
              <li className="nav-item"><NavLink to="/entertainment" className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"}>Entertainment</NavLink></li>
              <li className="nav-item"><NavLink to="/health" className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"}>Health</NavLink></li>
              <li className="nav-item"><NavLink to="/science" className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"}>Science</NavLink></li>
              <li className="nav-item"><NavLink to="/sports" className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"}>Sports</NavLink></li>
              <li className="nav-item"><NavLink to="/technology" className={({ isActive }) => isActive ? "nav-link active-category" : "nav-link"}>Technology</NavLink></li>

            </ul>
            <div className="theme-toggle">
              {/* <input
                  onChange={this.props.toggleMode}
                  checked={this.props.mode === "dark"}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault"
                /> */}
              <img
                onClick={props.toggleMode}
                src={props.mode === "dark" ? light : dark}
                alt="Toggle dark mode"
                width="20"
                height="20"
                style={{
                  cursor: "pointer",
                  filter: props.mode === "dark" ? "invert(1)" : "none",
                  marginRight: "20px"
                }}
              />

            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
