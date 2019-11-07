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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="ml-auto mr-5">Administrator Layo</div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Header;
