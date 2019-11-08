/* eslint-disable eqeqeq */
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
            name: '',
            category: '',
            email: '',
            address: '',
            description: '',
            phone: '',
            website: '',
            businessDetails: {},
            editBusiness: false,
            success: false
        };
    }

    dismissAll = () => {
        this.setState({
            editBusiness: false
        })
    }

    handleChange = (key, value) => {
		this.setState({
			[key]: value
		});
    };
    
    startEdit = () => {
        this.setState({
            editBusiness: true
        })
    }

    saveEdited = (id) => {
        this.setState({
            loading: true
        });
        let biznesDetails = {};
        biznesDetails.name = this.state.name;
        biznesDetails.description = this.state.description;
        biznesDetails.address = this.state.address;
        biznesDetails.category = this.state.category;
        biznesDetails.website = this.state.website;
        biznesDetails.phone = this.state.phone;
        biznesDetails.email = this.state.email;
        let topushBiz = [];
        const storedBiz = JSON.parse(localStorage.getItem('businessList'));
        storedBiz.forEach(bizz => {
            topushBiz.push(bizz);
        })
        topushBiz.forEach(biznesDetails => {
            if(biznesDetails._id == this.state.businessId) {
                biznesDetails.name = this.state.name;
                biznesDetails.description = this.state.description;
                biznesDetails.address = this.state.address;
                biznesDetails.category = this.state.category;
                biznesDetails.website = this.state.website;
                biznesDetails.phone = this.state.phone;
                biznesDetails.email = this.state.email;
            }
        });
        localStorage.setItem("businessList", JSON.stringify(topushBiz));
        this.dismissAll();
        this.setState({
            success: true
        });
        window.location.reload();
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

    componentDidMount() {
        const businessId = this.props.match.params.id;
        if (this.props.match.params.id) {
            this.setState({
                businessId: businessId
            })
        }
        const parsedList = JSON.parse(localStorage.getItem('businessList'));
        parsedList.forEach(business => {
            if(business._id == businessId) {
                this.setState({
                    businessDetails: business,
                    name: business.name,
                    email: business.email,
                    category: business.category,
                    address: business.address,
                    description: business.description,
                    phone: business.phone,
                    website: business.website
                })
            }
        })
    }

    render() {
        let bizImg = [];
        for(let i = 0; i < 6; i++) {
            bizImg.push(
                <img key={i} src={require("../assets/images/icons/categorry.svg")} alt="" />
            )
        }
        let categoryOptions = JSON.parse(localStorage.getItem('categoriesList'));
        let allcategories = []
        for (const [index, category] of categoryOptions.entries()) {
            allcategories.push(
                <option key={index} id={category} value={category}>{globals.capitalize(category)}
                </option>
            )
        }
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
                                    <Header header="Business details"/>
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
                                            <div className="profile-card mt-5">
                                                <div className="images-flex">
                                                   {bizImg}
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button className="delete action" 
                                                    onClick={() => this.deleteBusiness(this.state.businessDetails._id)}>Delete Business</button>
                                                <button className="edit action" onClick={this.startEdit}>Edit Business</button>
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

                <div className={`${(this.state.editBusiness ? 's4me-modal' : 'hide')}`}>
                    <div className="s4me-modal-body large">
                        <div className="close-btn" onClick={this.dismissAll}>
                            <img src={require('../assets/images/icons/close-modal.svg')} alt="X" />
                        </div>
                        <div className="title"><b>Edit Details</b></div>
                        <div className="s4me-modal-body-content mt-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="name">name</label>
                                        <input className="fill" type="text" value={this.state.name || ''} name="name"
                                            onChange={e => this.handleChange("name", e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="website">website</label>
                                        <input className="fill" type="text" value={this.state.website || ''} name="website"
                                            onChange={e => this.handleChange("website", e.target.value)} required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="phone">Phone number</label>
                                        <input className="fill" type="text" value={this.state.phone || ''} name="phone"
                                            onChange={e => this.handleChange("phone", e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="email">Email</label>
                                        <input className="fill" type="email" value={this.state.email || ''} name="email"
                                            onChange={e => this.handleChange("email", e.target.value)} required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="category">Category</label>
                                        <select name="category" id="category" required
                                            onChange={e => this.handleChange("category", e.target.value)}>
                                            <option name="category" id="category" value={this.state.category}>{globals.capitalize(this.state.category)}</option>
                                            {allcategories}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="address">Address</label>
                                        <input className="fill" type="address" value={this.state.address || ''} name="address"
                                            onChange={e => this.handleChange("address", e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-input">
                                        <label htmlFor="description">Description</label>
                                        <input className="fill" type="description" value={this.state.description || ''} name="description"
                                            onChange={e => this.handleChange("description", e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action right mt-4">
                            <button className="bttn secondary" onClick={this.dismissAll}>Cancel</button>
                            <button className="bttn primary large" onClick={this.saveEdited}>Save Changes</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default BusinessDetails;
