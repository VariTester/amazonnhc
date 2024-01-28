import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <img src={logo} alt="Logo" className="Logo" />
                <h1 className="navbar-logo">Amazon Natural Healing Center</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    {/* <button>Sing up</button> */}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
