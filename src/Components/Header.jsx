import React from "react";
import '../assets/styles/header.scss';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <div className="header-cover">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-us">
                        <div className="pageTitle mr-5">{this.props.header}</div>
                        <div className=" mr-5">Administrator Layo</div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Header;
