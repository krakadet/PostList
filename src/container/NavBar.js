import React, { PureComponent} from 'react'
import {NavLink} from 'react-router-dom'


class NavBar extends PureComponent {

    render() {
        return (
                <div className="flex-container">
                       <div className="flex-item"><NavLink  to="/">Home</NavLink></div>
                       <div className="flex-item"><NavLink to="/about">About Us</NavLink></div>
                       <div className="flex-item"><NavLink to="/contact">Company</NavLink></div>
                </div>
        )
    }
}
export default NavBar