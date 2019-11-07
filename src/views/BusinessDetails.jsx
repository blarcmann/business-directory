import React from "react";
import Header from "../Components/Header.jsx";
import "../assets/styles/home.scss";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar.jsx";
import globals from "../globals";

class BusinessDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            businessId: '',
            businesses: [],
            businessDetails: {}
        };
    }

    deleteBusiness = (id) => {
        console.log('inside the componente', id);
        let bizList = this.state.businesses;
        for(let i = 0; i < bizList.length; i++) {
            console.log(i, 'ihigh');
            if(1 === id) {
            console.log(i, 'a macth');
                bizList.splice(i, 1);
                localStorage.setItem("businessList", JSON.stringify(this.state.bizList));
                this.props.history.go(-1);
            }
        }
    }

    componentWillMount() {
        const businessId = this.props.match.params.id;
        if (this.props.match.params.id) {
            this.setState({
                businessId: businessId
            })
        }
        var businesses = localStorage.getItem("businessList");
        console.log(businesses, 'before parse');
        const parsedList = JSON.parse(businesses);
        this.setState({
            businesses: parsedList
        })
        // let businesses = businessList;
        parsedList.forEach(business => {
            if(business._id === businessId) {
                console.log('found business', business);
                this.setState({
                    businessDetails: business
                })
            }
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 padding-0">
                            <div className="side-bar">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-xl-10 padding-0">
                            <div className="main-container">
                                <div className="header">
                                    <Header />
                                </div>
                                <div className="contents-cover p-5">
                                    <div className="main-card">

                                        <div className="mt-4 mb-5 profile-data">
                                            <div className="biz-title text-center">Business Profile</div>
                                            <div className="biz-underline mx-auto mb-5"></div>
                                            <div className="profile-card">
                                                <div className="profile">
                                                    <img
                                                        src={require("../assets/images/icons/user.svg")}
                                                        alt=""
                                                    />
                                                    <div className="name">
                                                        {globals.capitalize(
                                                            this.state.businessDetails.name
                                                        )}
                                                    </div>
                                                    <div className="address">
                                                        {this.state.businessDetails.address}
                                                    </div>
                                                    <div className="title text-center mt-5">Description</div>
                                                    <div className="description mt-1">
                                                        {this.state.businessDetails.description}
                                                    </div>
                                                </div>
                                                <div className="details">
                                                <div className="each-details">
                                                        <img
                                                            src={require("../assets/images/icons/views.svg")}
                                                            alt=""
                                                        />
                                                        <span>{this.state.businessDetails.views}</span>
                                                    </div>
                                                    <div className="each-details">
                                                        <img
                                                            src={require("../assets/images/icons/email.svg")}
                                                            alt=""
                                                        />
                                                        <span>{this.state.businessDetails.email}</span>
                                                    </div>
                                                    <div
                                                        className={
                                                            this.state.businessDetails.phone
                                                                ? "each-details"
                                                                : "hide"
                                                        }
                                                    >
                                                        <img
                                                            src={require("../assets/images/icons/call.svg")}
                                                            alt=""
                                                        />
                                                        <span>{this.state.businessDetails.phone}</span>
                                                    </div>
                                                    <div className="each-details">
                                                        <img
                                                            src={require("../assets/images/icons/website.svg")}
                                                            alt=""
                                                        />
                                                        <span>{this.state.businessDetails.website}</span>
                                                    </div>
                                                    <div
                                                        className={
                                                            this.state.businessDetails.phone2
                                                                ? "each-details"
                                                                : "hide"
                                                        }
                                                    >
                                                        <img
                                                            src={require("../assets/images/icons/call.svg")}
                                                            alt=""
                                                        />
                                                        <span>{this.state.businessDetails.phone2}</span>
                                                    </div>
                                                    <div
                                                        className={
                                                            this.state.businessDetails.category
                                                                ? "each-details"
                                                                : "hide"
                                                        }
                                                    >
                                                        <img
                                                            src={require("../assets/images/icons/categorry.svg")}
                                                            alt=""
                                                        />
                                                        <span>{this.state.businessDetails.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button className="delete action" 
                                                    onClick={() => this.deleteBusiness(this.state.businessDetails._id)}>Delete Business</button>
                                                <button className="edit action">Edit Business</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row ml-0">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BusinessDetails;
