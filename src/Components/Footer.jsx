import React from "react";
import '../assets/styles/footer.scss';

// reactstrap components

class Footer extends React.Component {
    render() {
        const fullD = new Date();
        const y = fullD.getFullYear();
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-xl-between">
                        <div className="col-xl-6">
                            <div className="copyright text-center text-xl-left text-muted">
                                © {y}{" "}
                                <a href="http://google.com"
                                    className="font-weight-bold ml-1"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    Business Directory
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;