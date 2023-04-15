import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem , {NavItemDropdown} from '../../Components/NavItem/NavItem'
import {FiUser} from 'react-icons/fi'

const Header = () => {
  return (
    
    <div className="navbar navbar-expand-md navbar-dark cybrgo-nav ">
        <div className="container">
            <a href="#" className="navbar-brand">
                <img src={logo} alt=""  />
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                      <a href="/" className="nav-link">Home</a>
                      </NavItem>

            
                    <NavItem>
                      <a href="/streams" className="nav-link">Streams</a>
                      </NavItem>
                  
                      <NavItem>
                      <a href="/details" className="nav-link">Details</a>
                      </NavItem>

                    <NavItem>
                      <a href="/profile" className="nav-link">Profile <FiUser/></a>
                    </NavItem>
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Header