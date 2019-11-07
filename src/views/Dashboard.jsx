import React from "react";
import Header from "components/Headers/Header.jsx";
// import { Link } from "react-router-dom";
import "../assets/styles/home.scss";
// import axios from "axios";
// import globals from "../globals";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            totalRegisteredBusinesses: 1231,
            totalActiveBusinesses: 993,
            totalExternalVisits: 33212,
            totalBusinessCategories: 40,
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2">
                            <div className="side-bar">
                                <div className="side-bar">
                                    sidebar bitches
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="header">
                                header bastards!!!
                            </div>
                            <div className="main-card">
                                <div className="container-card p-4">
                                    <div className="row">
                                        <div className="col-lg-4 col-xl-3">
                                            <div className="each-card one">
                                                <div className="stats-overview"> Total number of businesses on the platform </div>
                                                <div className="stats-data">
                                                    <div className="data">
                                                        {this.state.totalRegisteredBusinesses}
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            src={require("../assets/images/icons/customers.png")}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3">
                                            <div className="each-card two">
                                                <div className="stats-overview"> Number of active businesses on the platform </div>
                                                <div className="stats-data">
                                                    <div className="data">
                                                        {this.state.totalActiveBusinesses}
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            src={require("../assets/images/icons/assets-widget.png")}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3">
                                            <div className="each-card three">
                                                <div className="stats-overview"> Total number of business catogories on the platform</div>
                                                <div className="stats-data">
                                                    <div className="data">
                                                        {this.state.totalBusinessCategories}
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            src={require("../assets/images/icons/beneficiaries-widget.png")}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3">
                                            <div className="each-card four">
                                                <div className="stats-overview"> Number of external visits (unique) </div>
                                                <div className="stats-data">
                                                    <div className="data">
                                                        {this.state.totalExternalVisits}
                                                    </div>
                                                    <div className="icon">
                                                        <img
                                                            src={require("../assets/images/icons/beneficiaries-widget.png")}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;
