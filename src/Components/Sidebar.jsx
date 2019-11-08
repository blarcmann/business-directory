import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/sidebar.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <div className="side-bar-cover">
                    <div className="top-logo">
                        {/* <img src={require("../assets/images/icons/customers.png")} alt="" /> */}
                        BIZ-DICTRY
                    </div>
                    <div className="menu-itemss">
                    <Link to="/dashboard">
                            <img src={require('../assets/images/icons/dashboard.svg')} alt="" />
                            Dashboard
                        </Link>
                        <Link to="/businesses">
                            <img src={require('../assets/images/icons/reports.svg')} alt="" />
                            Businesses
                        </Link>
                        {/* <Link to="/businesses">
                            <img src={require('../assets/images/icons/reports.svg')} alt="" />
                            Categories
                        </Link>
                        <Link to="all-businesses">
                            <img src={require('../assets/images/icons/reports.svg')} alt="" />
                            All businesses
                        </Link> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Sidebar;
